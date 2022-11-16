import test from "@playwright/test";

test.describe("group", () => {
  test("runs in parallel 1", async (page) => {
    await test.step("Parse", async () => {
      await console.log("test1");
    });
  });

  // test("runs in parallel 2", async () => {
  //   // await page.waitForTimeout(5000);
  //   await test.step("Test 2", async () => {
  //     await console.log("Running2");
  //   });
  // });
});
