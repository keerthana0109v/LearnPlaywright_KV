import {expect, test} from '@playwright/test';
 
test(`Web login demo`, async ({page}) => {

    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.waitForLoadState(`domcontentloaded`);
    await expect(page.locator(`//h2[text()='Leaftaps Login']`)).toBeVisible();
    await page.locator(`[name="USERNAME"]`).fill("keerthyplaywright");
    await page.locator(`#password`).fill("test123")
    await page.locator(`[type=submit]`).click();
    //await expect(page.locator(`#errorDiv`)).toContainText("The Following Errors Occurred:following error occurred during login: User not found.")
    await expect(page.locator(`#errorDiv`)).toBeVisible();
   

   


})