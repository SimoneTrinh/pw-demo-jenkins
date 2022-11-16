import test, { Page } from "@playwright/test";

// example.spec.ts
const people = ["Alice", "Bob"];
// for (const name of people) {
//   test(`testing with ${name}`, async () => {
//     // ...
//   });
//   // You can also do it with test.describe() or with multiple tests as long the test name is unique.
// }
test.describe.parallel("group", () => {
  for (const name of people) {
    test(`testing with ${name}`, async (page) => {
      // await test.step("Parse", async () => {
      //   console.log("test1");
      // });
    });
    // You can also do it with test.describe() or with multiple tests as long the test name is unique.
  }
  //   test("runs in parallel 1", async (page) => {});
});
