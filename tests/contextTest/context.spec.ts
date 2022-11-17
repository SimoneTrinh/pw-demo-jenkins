import { test, expect, chromium } from "@playwright/test";

test("homepage has title and links to intro page", async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  console.log(context);
  const page = await context.newPage();
  await page.goto("https://playwright.dev");
  await context.close();
  console.log("End context:" + context);
});
