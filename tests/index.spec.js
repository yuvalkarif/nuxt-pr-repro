const { default: test, expect } = require("@playwright/test");

// count outputs 0 while expect manages to locate the three of them
test("_vue locator count test", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  const tests = await page.locator("_vue=Test");
  const count = await tests.count();
  console.log("count", count);
  await expect(tests).toHaveCount(3);
});
