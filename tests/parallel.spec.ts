import test, { Page } from "@playwright/test";

const people = ["Alice", "Bob"];
for (const name of people) {
  test(`testing with ${name}`, async ({ page }) => {
    await test.step(`bb`, async () => {
      console.log("oo1");
    });
  });
}
