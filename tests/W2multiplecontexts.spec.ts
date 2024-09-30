import test, { chromium, firefox } from "@playwright/test";

test(`To Lauch 2 Browsers and Load URL and verify the Title & URL`, async () => {
    const browser1 = await chromium.launch({headless:false,channel:'msedge'});

    const context1 = await browser1.newContext();

    const page1 = await context1.newPage();

    await page1.goto("https://www.redbus.in/");

    await page1.waitForTimeout(5000);

    const page1url=page1.url();
    console.log(`The URL of page1 is ${page1url}`);

    const title1 = await page1.title();
    console.log(`The Title of the page1 is ${title1}`);

    await page1.waitForTimeout(5000);


    const browser2 = await firefox.launch({headless:false});

    const context2 = await browser2.newContext();

    const page2 = await context2.newPage();

    await page2.goto("https://www.flipkart.com/");

    await page2.waitForTimeout(5000);

    const page2url=page2.url();
    console.log(`The URL of page2 is ${page2url}`);

    const title2 = await page2.title();
    console.log(`The Title of the page2 is ${title2}`);

    await page1.waitForTimeout(5000);

    await page1.close();

    await context1.close();

    await browser1.close();

    await page2.close();

    await context2.close();

    await browser2.close();
    

})