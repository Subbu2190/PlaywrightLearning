import test, { chromium, expect } from "@playwright/test";

test(`Marathon 1 - Salesforce Applciation - Create and verify a New Case in Chatter`, async () => {
    const browser = await chromium.launch({headless:false,channel:"chrome"})

    const context = await browser.newContext();

    const page = await context.newPage();

    await page.goto("https://ccr3-dev-ed.develop.my.salesforce.com/");

    await page.getByLabel("username").fill("Subbu210890@testleaf.com");

    await page.getByLabel("password").fill("Sanjeevi@2190");

    await page.locator("//input[@id='Login']").click();

    // console.log("The title of the page is "+await page.title()); 

    await page.locator("[class='slds-icon-waffle']").click();

    await page.getByText("View All").click();

    await page.getByPlaceholder("Search apps or items...").fill("Service");

    // await page.waitForTimeout(5000);

    await page.locator("(//mark[text()='Service'])[1]").click();

    await page.locator("//span[text()='Cases']").click();

    await page.locator("//div[@title='New']").click();

    await page.locator("(//input[@class='slds-combobox__input slds-input'])[1]").click();

    await page.locator("//span[@title='New Contact']").click();

    await page.locator("//button[@name='salutation']").click();

    await page.locator("//span[@title='Dr.']").click();

    await page.getByPlaceholder("First Name").fill("casetochatterfirstname");

    await page.getByPlaceholder("Last Name").fill("casetochatterlastname");

    await page.locator("(//button[@name='SaveEdit'])[2]").click();

    // console.log(await page.locator("//span[@class='toastMessage slds-text-heading--small forceActionsText']").textContent());

    // page.waitForTimeout(40000);

    await page.locator("(//input[@part='input'])[3]").click();

    await page.locator("//span[@title='New Account']").click();

    await page.locator("//input[@class='slds-input' and @name='Name']").fill("casetestaccname");

    await page.locator("//input[@class='slds-input' and @name='AccountNumber']").fill("5531566")

    await page.locator("(//button[@role='combobox' and @data-value='--None--'])[7]").click();

    await page.locator("//span[@title='Hot']").click();

    await page.locator("(//button[@name='SaveEdit'])[2]").click();

    // console.log(await page.locator("//span[@class='toastMessage slds-text-heading--small forceActionsText']").textContent());

    // page.waitForTimeout(40000);

    await page.locator("(//button[contains(@class,'slds-combobox__input slds-input_faux')])[1]").click();

    await page.locator("//span[@title='New']").click();

    await page.locator("(//button[contains(@class,'slds-combobox__input slds-input_faux')])[2]").click();

    await page.locator("//span[@title='High']").click();

    await page.locator("(//button[contains(@class,'slds-combobox__input slds-input_faux')])[3]").click();

    await page.locator("//span[@title='Email']").click();

    await page.locator("(//label[text()='Subject']/following::input)[1]").fill("Product Return")

    await page.locator("(//label[text()='Description']/following::textarea)[1]").fill("Defective product")

    await page.locator("//button[@name='SaveEdit']").click();

    // console.log(await page.locator("//span[@class='toastMessage slds-text-heading--small forceActionsText']").textContent());

    await page.locator("(//span[contains(@class,'slds-grid highlights-primary-row')])[1]").click();

    await page.locator("//button[@role='combobox' and @aria-label='Status']").click();

    await page.locator("//span[@title='Escalated']").click();

    await page.locator("//button[text()='Save']").click();

    await page.locator("//button[@title='Share an update...']").click();

    await page.locator("(//div[@contenteditable='true'])[1]").fill("Case Update info added");

    await page.locator("//button[contains(@class,'slds-button slds-button_brand')]").click();

    await expect (page.locator("((//a[@title='Just now'])/following::a[@class='cuf-feedItemActionTrigger cuf-buttonIcon slds-button slds-button_icon-border slds-button_icon-x-small'])[1]")).toBeVisible();

    await page.locator("((//a[@title='Just now'])/following::a[@class='cuf-feedItemActionTrigger cuf-buttonIcon slds-button slds-button_icon-border slds-button_icon-x-small'])[1]").click();

    await expect (page.locator("//span[text()='Like on Chatter']")).toBeVisible();

    await page.locator("//span[text()='Like on Chatter']").click();

    // await page.pause();

    // await expect (page.locator("//span[@class='toastMessage slds-text-heading--small forceActionsText']")).toHaveText("Post was liked.");

    await expect (page.locator("//span[text()='Chatter']")).toBeVisible();

    await page.locator("//span[text()='Chatter']").click();
    
    page.close;

    context.close;

    browser.close;
}
)