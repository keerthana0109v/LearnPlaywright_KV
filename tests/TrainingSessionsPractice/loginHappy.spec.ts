import {expect, test} from '@playwright/test';
 
test(`Web login demo`, async ({page}) => {

    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.waitForLoadState(`domcontentloaded`);
    await expect(page.locator(`//h2[text()='Leaftaps Login']`)).toBeVisible();
    await page.locator(`[name="USERNAME"]`).fill("demoSalesManager");
    await page.locator(`#password`).fill("crmsfa")
    await page.locator(`[type=submit]`).click();
    

   


})