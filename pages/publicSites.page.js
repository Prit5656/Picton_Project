class OrangeHRMLoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.getByRole('textbox', { name: /username/i });
    this.passwordInput = page.getByRole('textbox', { name: /password/i });
    this.loginButton = page.getByRole('button', { name: /login/i });
  }

  async goto() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', {
      waitUntil: 'domcontentloaded',
      timeout: 60000,
    });
  }
}

class GoogleMapsPage {
  constructor(page) {
    this.page = page;
    this.consentButton = page.getByRole('button', { name: /Accept all|I agree|Accept/i }).first();
    this.placeLinks = page.locator('a[href*="/maps/place/"], a[href*="!1s0x"]');
  }

  async gotoRestaurantsSearch() {
    await this.page.goto('https://www.google.com/maps/search/Restaurants', {
      waitUntil: 'domcontentloaded',
      timeout: 60000,
    });
  }

  async acceptConsentIfPresent() {
    if (await this.consentButton.isVisible().catch(() => false)) {
      await this.consentButton.click();
    }
  }
}

module.exports = { OrangeHRMLoginPage, GoogleMapsPage };
