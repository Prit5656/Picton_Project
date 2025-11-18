import { test, expect} from '@playwright/test';
import {LoginPage} from '../../login';
import {LandingPage} from '../../pages/landingPage/landingPage';


test.describe('Login', () => {
    
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
});