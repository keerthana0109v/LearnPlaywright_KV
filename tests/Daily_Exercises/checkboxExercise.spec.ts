import {test,expect} from '@playwright/test';

test('Handle checkboxes of different style',async({page})=>{

await page.goto('https://www.lambdatest.com/selenium-playground/checkbox-demo')
//Handling Disabled checkbox
//const disabledOptions= await page.locator(`(//div[@class='pb-10'])[2]/div/input[@type='checkbox']`)
//const optioncount= (await disabledOptions.count());
await page.locator(`((//div[@class='pb-10'])[2]/div/input[@type='checkbox'])[2]`).click();
//expect(page.locator(`((//div[@class='pb-10'])[2]/div/input[@type='checkbox'])[1]`)).toBeChecked()
const disabledOption= await page.locator(`((//div[@class='pb-10'])[2]/div/input[@type='checkbox'])[1]`)

if(await disabledOption.isChecked()){
  console.log("Checked")  
}
else{
    disabledOption.click()
}
expect(disabledOption).toBeEnabled()

//Handling Multiple Checkbox

//clicking on the CheckAll button to select all and deselect two options
//const checkAllButton= await page.locator(`//input[@type='button']`)
await page.locator(`//input[@type='button']`).click()
//checkAllButton.click()

await page.locator(`//input[@id='ex1-check1']`).uncheck()
//await page.locator(`//input[@id='ex1-check3']`).uncheck() -> faced an error: Error: locator.uncheck: Error: strict mode violation: 
// locator('//input[@id=\'ex1-check3\']') resolved to 2 elements

})