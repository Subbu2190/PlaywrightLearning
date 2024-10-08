import test, { chromium } from "@playwright/test";

test(`Day05 Assignment03 - Salesforce Applciation Create New Account`, async () => {
    const browser = await chromium.launch({headless:false,channel:"chrome"})

    const context = await browser.newContext();

    const page = await context.newPage();

    await page.goto("https://ccr3-dev-ed.develop.my.salesforce.com/");

    await page.getByLabel("username").fill("Subbu210890@testleaf.com");

    await page.getByLabel("password").fill("Sanjeevi@2190");

    await page.locator("//input[@id='Login']").click();

    await page.waitForTimeout(5000);

    console.log("The URL of the page is "+ page.url()); 

    console.log("The title of the page is "+await page.title()); 

    await page.locator("[class='slds-icon-waffle']").click();

    await page.getByText("View All").click();

    await page.getByPlaceholder("Search apps or items...").fill("Service");

    await page.locator("(//mark[text()='Service'])[1]").click();

    await page.locator("[title='Accounts']").click();

    await page.waitForTimeout(5000);

    await page.getByRole('button', { name: /New/i }).click();

    await page.locator("[name='Name']").fill("SubbuS1test");

    await page.locator("//button[@name='SaveEdit']").click();

    console.log(await page.locator("[class='toastContent slds-notify__content']").textContent());

    await page.waitForTimeout(5000);

    page.close;

    context.close;

    browser.close;
}
)