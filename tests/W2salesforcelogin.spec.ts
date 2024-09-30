import test, { chromium } from "@playwright/test";

test(`To Login to Salesforce and Print the Title & URL`, async () => {
    const browser = await chromium.launch({headless:false,channel:"chrome"})

    const context = await browser.newContext();

    const page = await context.newPage();

    await page.goto("https://login.salesforce.com/");

    await page.waitForTimeout(5000);

    const URL=page.url();

    console.log(`The URL of the page is ${URL}`);
    
    const TITLE = await page.title();

    console.log(`The Title of the page is ${TITLE}`);

    await page.close();

    await context.close();

    await browser.close();
    
}
)