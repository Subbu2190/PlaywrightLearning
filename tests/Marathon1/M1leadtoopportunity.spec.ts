import test, { chromium, expect } from "@playwright/test";

test(`Marathon 1 - Salesforce Applciation - Verify Lead Creation and Conversion to Opportunity`, async () => {
    const browser = await chromium.launch({headless:false,channel:"chrome"})

    const context = await browser.newContext();

    const page = await context.newPage();

    await page.goto("https://ccr3-dev-ed.develop.my.salesforce.com/");

    await page.getByLabel("username").fill("Subbu210890@testleaf.com");

    await page.getByLabel("password").fill("Sanjeevi@2190");

    await page.locator("//input[@id='Login']").click();

    // await page.waitForTimeout(5000);

    // console.log("The URL of the page is "+ page.url()); 

    // console.log("The title of the page is "+await page.title()); 

    await page.locator("[class='slds-icon-waffle']").click();

    await page.getByText("View All").click();

    await page.getByPlaceholder("Search apps or items...").fill("Marketing");

    await page.locator("//mark[text()='Marketing']").click();

    // await page.waitForTimeout(3000);

    await page.locator("//span[text()='Leads']").click();

    // await page.waitForTimeout(5000);

    await page.locator("//div[@title='New']").click();

    // await page.waitForTimeout(3000);

    await page.locator("//button[@name='salutation']").click();

    await page.locator("//span[@title='Mr.']").click();

    // await page.waitForTimeout(3000);

    await page.getByPlaceholder("First Name").fill("M1arsenalfn");

    await page.getByPlaceholder("Last Name").fill("lnsfars");

    await page.locator("//input[@name='Company']").fill("compnm");

    // await page.waitForTimeout(1000);

    await page.locator("//button[@name='SaveEdit']").click();

    // await page.waitForTimeout(5000);

    console.log(await page.locator("//span[@class='toastMessage slds-text-heading--small forceActionsText']").textContent());

    await page.locator("//button[contains(@class,'slds-button slds-button_icon-border-filled')]//lightning-primitive-icon").click();

    // await page.waitForTimeout(3000);
    
    await page.locator("//span[text()='Convert']").click();
    
    // await page.waitForTimeout(5000);

    await page.locator("(//button[@class='slds-button transparentButton'])[3]").click();

    await page.locator("(//input[@class=' input' and @aria-required='true'])[3]").clear();

    await page.locator("(//input[@class=' input' and @aria-required='true'])[3]").fill("sfm1opportunity");

    // await page.waitForTimeout(2000);

    await page.locator("//button[@class='slds-button slds-button_brand']").click();

    // await page.waitForTimeout(1000);

    console.log(await page.locator("//h2[text()='Your lead has been converted']").textContent());

    // await page.waitForTimeout(3000);

    await page.locator("//button[text()='Go to Leads']").click();

    // await page.locator("//span[text()='Leads']").click();

    await page.locator("//input[@name='Lead-search-input']").fill("M1arsenalfn");

    await page.locator("//input[@name='Lead-search-input']").press('Enter');

    await expect (page.locator("//span[text()='No items to display.']")).toHaveText("No items to display.");

    await page.locator("//span[text()='Opportunities']").click();

    await page.locator("//input[@name='Opportunity-search-input']").fill("sfm1opportunity");

    await page.locator("//input[@name='Opportunity-search-input']").press('Enter');

    await page.locator("//a[@title='sfm1opportunity']").click();

    await expect (page.locator("//lightning-formatted-text[text()='sfm1opportunity']")).toHaveText("sfm1opportunity");
    
    page.close;

    context.close;

    browser.close;
}
)