// Tests for reorder.js.  Run: node --test reorder.test.js
const test = require("node:test");
const assert = require("node:assert");
const { parseCsv, reorderList, groupBySupplier, tidyName, formatMessage } = require("./reorder.js");

const SAMPLE = "Item,Supplier,In stock,Reorder at,Unit\n" +
  "Cement 50 kg,Building wholesaler,5,20,bags\n" +
  "Iron sheets gauge 30,Steel supplier,45,30,sheets\n";

test("parses the export", () => {
  const rows = parseCsv(SAMPLE);
  assert.strictEqual(rows.length, 2);
  assert.strictEqual(rows[0].Item, "Cement 50 kg");
  assert.strictEqual(rows[1]["Reorder at"], "30");
});

test("lists items below their reorder level", () => {
  const list = reorderList(parseCsv(SAMPLE));
  assert.deepStrictEqual(list.map((r) => r.Item), ["Cement 50 kg"]);
});

test("groups the list by supplier", () => {
  const groups = groupBySupplier(reorderList(parseCsv(SAMPLE)));
  assert.deepStrictEqual(Object.keys(groups), ["Building wholesaler"]);
});

test("tidies lower-case names", () => {
  assert.strictEqual(tidyName("grinding discs"), "Grinding Discs");
  assert.strictEqual(tidyName("Cement 50 kg"), "Cement 50 kg");
});

test("formats the message", () => {
  const msg = formatMessage(groupBySupplier(reorderList(parseCsv(SAMPLE))));
  assert.match(msg, /Building wholesaler:/);
  assert.match(msg, /Cement 50 kg: 5 left/);
});

test("includes items equal to their reorder level", () => {
  const csv = "Item,Supplier,In stock,Reorder at,Unit\n" +
    "Grinding discs 115 mm,Gas and welding supplier,20,20,pieces\n";
  const list = reorderList(parseCsv(csv));
  assert.deepStrictEqual(list.map((r) => r.Item), ["Grinding discs 115 mm"]);
});

test("handles quoted item names with commas and blank stock cells", () => {
  const csv = 'Item,Supplier,In stock,Reorder at,Unit\n' +
    '"Nails, 3 inch",Hardware wholesaler,4,10,kg\n' +
    'Cement 50 kg,Building wholesaler,,20,bags\n';
  const list = reorderList(parseCsv(csv));
  assert.deepStrictEqual(list.map((r) => r.Item), ["Nails, 3 inch", "Cement 50 kg"]);
});
