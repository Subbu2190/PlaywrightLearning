import test, { chromium } from "@playwright/test";

test(`Day05 classwork test`, async () => {
    const browser = await chromium.launch({headless:false,channel:"chrome"})

    const context = await browser.newContext();

    const page = await context.newPage();

    await page.goto("https://ccr3-dev-ed.develop.my.salesforce.com/");

    await page.locator("#username").fill("Subbu210890@testleaf.com");

    await page.waitForTimeout(5000);

//    console.log("The value entered is"+ await page.locator("#username").textContent());

    await page.locator("#password").fill("Sanjeevi@2190");

    // console.log("The value entered is"+ await page.locator("#password").textContent());

    await page.locator("//input[@id='Login']").click();

    await page.waitForTimeout(5000);

    console.log("The title of the page is "+await page.title());    

    // await page.getByAltText("User").click();

    await page.locator("//div[@data-aura-class='forceEntityIcon']").click();

    await page.getByText("Log Out").click();

    await page.waitForTimeout(5000);

    console.log("The title of the page is "+await page.title());
    
}
)
