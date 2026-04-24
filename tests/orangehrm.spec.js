const { test, expect } = require('@playwright/test');
const { OrangeHRMLoginPage } = require('../pages/publicSites.page');

test('OrangeHRM login page basic assertions', async ({ page }) => {
  test.setTimeout(90000);

  const orangeHRMLoginPage = new OrangeHRMLoginPage(page);
  await orangeHRMLoginPage.goto();

  await expect(page).toHaveTitle(/OrangeHRM/i, { timeout: 30000 });
  await expect(orangeHRMLoginPage.usernameInput).toBeVisible({ timeout: 30000 });
  await expect(orangeHRMLoginPage.loginButton).toBeVisible({ timeout: 30000 });
});
