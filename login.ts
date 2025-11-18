import {Page, Locator} from '@playwright/test'

export class LoginPage{
 readonly page: Page;
 readonly userField: Locator;
 readonly passwordField: Locator;
 readonly loginButton: Locator;

 constructor (page){
    this.page = page;
    this.userField = page.locator('[data-test="username"]');
    this.passwordField = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-button"]');
    }

    async fillUserField(userName: string){
        await this.userField.fill(userName);
    }

    async fillPasswordField(password: string){
        await this.passwordField.fill(password);
    }

    async clickLoginButton(){
        await this.loginButton.click ();
    }

}