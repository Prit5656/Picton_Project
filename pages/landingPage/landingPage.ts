import {Page,expect,  Locator} from '@playwright/test'

export class LandingPage{
 readonly page: Page;
 readonly title: Locator;
 readonly addToCart: Locator;
 readonly goToCart: Locator;
 readonly verifyCart: Locator;


 constructor (page){
    this.page = page;
    this.title = page.locator('[data-test="title"]');
    this.addToCart = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    this.goToCart = page.locator('[data-test="shopping-cart-link"]');
    this.verifyCart = page.locator('[data-test="inventory-item-name"]')
    
    }

    async verifyTitle(title: string){
        await expect(this.title).toHaveText(title)
    }

    async clickAddToCart(index: number){
        await this.addToCart.nth(index).click();
    }

    async clickGoToCart(){
        await this.goToCart.click();
    }

  async assertVerifyCart(nameOfItem: string){
     await expect(this.verifyCart).toHaveText(nameOfItem)
  }
   

}