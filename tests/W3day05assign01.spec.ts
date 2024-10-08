import test, { chromium } from "@playwright/test";

test(`Day05 Assignment01 - log in to Salesforce using Playwright with TypeScript.`, async () => {
    const browser = await chromium.launch({ headless: false, channel: "chrome" })

    const context = await browser.newContext();

    const page = await context.newPage();

    await page.goto("https://ccr3-dev-ed.develop.my.salesforce.com/");

    await page.locator("#username").fill("Subbu210890@testleaf.com");

    await page.locator("#password").fill("Sanjeevi@2190");

    await page.locator("//input[@id='Login']").click();

    await page.waitForTimeout(10000);

    const URL = page.url();

    console.log(`The URL of the page is ${URL}`);

    const title = await page.title();

    console.log("The title of the page is " + title);


    // await page.getByAltText("User").click();

    await page.locator("//div[@data-aura-class='forceEntityIcon']").click();

    await page.getByText("Log Out").click();

    // await page.waitForTimeout(5000);

    console.log("The title of the page is " + await page.title());

    page.close;

    context.close;

    browser.close;

}
)
