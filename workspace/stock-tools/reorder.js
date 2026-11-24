// reorder.js -- reorder helper for the shop's stock sheet.
// Reads the stock tab downloaded as CSV and prints what to reorder, grouped by supplier,
// ready to paste into WhatsApp.
//
// Usage: node reorder.js stock-export.csv
const fs = require("fs");

// Parse a single CSV line respecting double-quoted fields containing commas.
function splitCsvLine(line) {
  const cells = [];
  let current = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') {
      inQuotes = !inQuotes;
    } else if (ch === "," && !inQuotes) {
      cells.push(current.trim());
      current = "";
    } else {
      current += ch;
    }
  }
  cells.push(current.trim());
  return cells;
}

// Turn the CSV text into one object per row, keyed by the header names.
function parseCsv(text) {
  const lines = text.trim().split("\n");
  const headers = splitCsvLine(lines[0]);
  return lines.slice(1).map((line) => {
    const cells = splitCsvLine(line);
    const row = {};
    headers.forEach((h, i) => {
      row[h] = (cells[i] || "").trim();
    });
    return row;
  });
}

// Items at or below their reorder level (blank In stock treated as 0).
function reorderList(rows) {
  return rows.filter((r) => {
    const stock = r["In stock"] === "" ? 0 : parseInt(r["In stock"], 10);
    const threshold = parseInt(r["Reorder at"], 10);
    return !Number.isNaN(stock) && !Number.isNaN(threshold) && stock <= threshold;
  });
}

// One list per supplier, so each supplier gets one message (Node LTS compatible).
function groupBySupplier(list) {
  return list.reduce((acc, r) => {
    const key = r.Supplier;
    if (!acc[key]) acc[key] = [];
    acc[key].push(r);
    return acc;
  }, {});
}

// The counter staff type item names in lower case on the phone -- tidy them for the message.
function tidyName(name) {
  if (name === name.toLowerCase()) {
    return name.replace(/\b\w/g, (c) => c.toUpperCase());
  }
  return name;
}

function formatMessage(groups) {
  const out = ["Reorder list"];
  for (const supplier of Object.keys(groups)) {
    out.push("");
    out.push(supplier + ":");
    for (const r of groups[supplier]) {
      const qty = r["In stock"] === "" ? "0" : r["In stock"];
      out.push("- " + tidyName(r.Item) + ": " + qty + " left (reorder at " + r["Reorder at"] + " " + r.Unit + ")");
    }
  }
  return out.join("\n");
}

if (require.main === module) {
  const file = process.argv[2] || "stock-export.csv";
  const rows = parseCsv(fs.readFileSync(file, "utf8"));
  console.log(formatMessage(groupBySupplier(reorderList(rows))));
}

module.exports = { parseCsv, reorderList, groupBySupplier, tidyName, formatMessage };
