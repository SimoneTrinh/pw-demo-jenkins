// @ts-check
const playwright = require("@playwright/test");

(async () => {
  const browser = await playwright.chromium.launch({
    args: ["--start-maximized"],
    headless: false,
  });
  const context = await browser.newContext({
    viewport: null,
  });
  const page = await context.newPage();
  await page.goto("http://whatsmyuseragent.org/");
  await browser.close();
})();
