# Picton - Playwright Test Automation Project

A Playwright-based end-to-end testing framework for the SauceDemo e-commerce website. This project implements the Page Object Model (POM) pattern to create maintainable and scalable test automation.

## Overview

This project automates testing of the SauceDemo application, covering key user flows including:
- User authentication
- Product browsing and verification
- Shopping cart functionality
- Order checkout process

## Features

- ✅ TypeScript-based test framework
- ✅ Page Object Model (POM) architecture
- ✅ Cross-browser testing support (Chrome, Firefox, Safari)
- ✅ HTML test reports with trace viewer
- ✅ Parallel test execution
- ✅ Retry mechanism for flaky tests

## Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn package manager

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd picton
```

2. Install dependencies:
```bash
npm install
```

3. Install Playwright browsers:
```bash
npx playwright install
```

## Project Structure

```
picton/
├── fixtures/              # Test fixtures and test data
│   └── creds.json        # Credentials configuration
├── pages/                # Page Object Model classes
│   ├── landingPage/     # Landing page POM
│   └── login/           # Login page POM
├── tests/                # Test specifications
│   ├── login/           # Login test suite
│   └── example.spec.ts  # Example tests
├── login.ts             # Login page object
├── playwright.config.ts # Playwright configuration
└── package.json         # Project dependencies
```

## Configuration

The project is configured in `playwright.config.ts`:

- **Base URL**: `https://www.saucedemo.com/`
- **Test Directory**: `./tests`
- **Browsers**: Chromium, Firefox, WebKit
- **Reporter**: HTML reporter with trace viewer
- **Parallel Execution**: Enabled for faster test runs

## Running Tests

### Run all tests
```bash
npx playwright test
```

### Run tests in a specific browser
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### Run tests in headed mode
```bash
npx playwright test --headed
```

### Run a specific test file
```bash
npx playwright test tests/login/login.spec.ts
```

### Run tests in UI mode (interactive)
```bash
npx playwright test --ui
```

### Run tests in debug mode
```bash
npx playwright test --debug
```

## Viewing Test Reports

After running tests, view the HTML report:
```bash
npx playwright show-report
```

The report includes:
- Test execution results
- Screenshots for failed tests
- Trace viewer for debugging
- Performance metrics

## Test Credentials

The project uses the following test credentials for SauceDemo:
- **Username**: `standard_user`
- **Password**: `secret_sauce`

Credentials can be configured in `fixtures/creds.json` if needed.

## Page Object Model

The project follows the Page Object Model pattern:

- **LoginPage** (`login.ts`): Handles login functionality
- **LandingPage** (`pages/landingPage/landingPage.ts`): Handles product page interactions

Each page object encapsulates:
- Locators for page elements
- Methods for page interactions
- Assertions for page verification

## Example Test

```typescript
test('login, verify title, add product and verify added product', async({page}) => {
    let login = new LoginPage(page);
    let landing = new LandingPage(page);
    await page.goto('')
    await login.fillUserField('standard_user')
    await login.fillPasswordField('secret_sauce')
    await login.clickLoginButton()
    await landing.verifyTitle("Products")
    await landing.clickAddToCart(0);
    await landing.clickGoToCart();
    await landing.assertVerifyCart("Sauce Labs Backpack");
})
```

## Continuous Integration

The project is configured for CI environments:
- Retries: 2 retries on CI
- Workers: 1 worker on CI (sequential execution)
- Trace collection: Enabled on first retry

## Troubleshooting

### Tests fail with browser not found
Run `npx playwright install` to install required browsers.

### Tests timeout
Check network connectivity and ensure the SauceDemo website is accessible.

### Trace viewer not showing
Ensure trace files are generated in `test-results/` directory. Traces are collected on first retry by default.

## Contributing

1. Create a feature branch
2. Write tests following the Page Object Model pattern
3. Ensure all tests pass
4. Submit a pull request

## License

ISC

