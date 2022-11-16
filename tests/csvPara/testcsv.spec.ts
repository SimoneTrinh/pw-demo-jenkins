// foo.spec.ts
import fs from "fs";
import path from "path";
import { test } from "@playwright/test";
import { parse } from "csv-parse/sync";

const records = parse(fs.readFileSync(path.join(__dirname, "data2.csv")), {
  columns: true,
  skip_empty_lines: true,
});

for (const record of records) {
  test(`fooo: ${record.testcase_id}`, async ({ page }) => {
    await test.step("test", async () => {
      console.log(record.testcase_id);
    });
  });
}
// for (const record of records) {
//   test(`fooo: ${record.test_case}`, async ({ page }) => {
//     console.log(record.test_case, record.some_value, record.some_other_value);
//   });
// }
