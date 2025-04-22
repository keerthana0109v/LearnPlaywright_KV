import {expect, test} from '@playwright/test';
 
test(`Web login demo`, async ({page}) => {
    await page.goto(`https://www.lambdatest.com/selenium-playground/checkbox-demo`);
    await page.waitForLoadState(`domcontentloaded`);
    await page.locator(`#isAgeSelected`).click()
    console.log(await page.locator(`#txtAge`).textContent())
    await expect(page.locator(`#txtAge`)).toBeVisible()

});
