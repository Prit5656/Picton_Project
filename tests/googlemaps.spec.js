const { test, expect } = require('@playwright/test');
const { GoogleMapsPage } = require('../pages/publicSites.page');

test('Google Maps search for Restaurants returns at least one result', async ({ page }) => {
  test.setTimeout(90000);

  const googleMapsPage = new GoogleMapsPage(page);
  await googleMapsPage.gotoRestaurantsSearch();
  await googleMapsPage.acceptConsentIfPresent();

  await expect(googleMapsPage.placeLinks.first()).toBeVisible({ timeout: 30000 });
  expect(await googleMapsPage.placeLinks.count()).toBeGreaterThan(0);
});
