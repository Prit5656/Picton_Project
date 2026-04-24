# Playwright Automation Assignment

This project contains Playwright tests for:
- **Part 1 (Basic Assertions)** on OrangeHRM login page
- **Part 2 (Restaurant Search)** on Google Maps

## Final Test Files

- `tests/orangehrm.spec.js` - Part 1 assertions
- `tests/googlemaps.spec.js` - Part 2 search scenario
- `pages/publicSites.page.js` - Shared POM classes

## Prerequisites

- Node.js 18+
- npm

## Setup

```bash
npm install
npx playwright install
```

## Run Tests

Run all tests:

```bash
npx playwright test --reporter=line
```

Run only Part 1 (OrangeHRM):

```bash
npx playwright test tests/orangehrm.spec.js --reporter=line
```

Run only Part 2 (Google Maps):

```bash
npx playwright test tests/googlemaps.spec.js --reporter=line
```

Run in UI mode:

```bash
npx playwright test tests/orangehrm.spec.js tests/googlemaps.spec.js --ui
```

## What Each Test Validates

### Part 1 - OrangeHRM
- Page title contains `OrangeHRM`
- Username input is visible
- Login button is visible

### Part 2 - Google Maps
- Search for `Restaurants`
- Assert at least one place result is visible

## Project Structure

```text
pages/
  publicSites.page.js
tests/
  orangehrm.spec.js
  googlemaps.spec.js
playwright.config.ts
package.json
```

