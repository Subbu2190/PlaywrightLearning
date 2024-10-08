import test, { chromium } from "@playwright/test";

test(`Day05 Assignment02 - Create a Lead in CRM SFA Applciation.`, async () => {
    const browser = await chromium.launch({ headless: false, channel: "chrome" })

    const context = await browser.newContext();

    const page = await context.newPage();

    await page.goto("http://leaftaps.com/opentaps/control/main");

    await page.locator("#username").fill("Demosalesmanager");

    await page.locator("#password").fill("crmsfa");

    await page.locator("//input[@value='Login']").click();

    await page.locator("//div[@class='crmsfa']").click();

    await page.locator("//a[@href='/crmsfa/control/leadsMain']").click();

    await page.locator("//a[@href='/crmsfa/control/createLeadForm']").click();

    await page.locator("//input[@id='createLeadForm_companyName']").fill("TestS1CompanyName");

    await page.locator("//input[@id='createLeadForm_firstName']").fill("Splaywright1FirstName");

    await page.locator("//input[@id='createLeadForm_lastName']").fill("Splaywright1Lastname");

    await page.locator("//input[@id='createLeadForm_personalTitle']").fill("Splaywright1Salutation");

    await page.locator("//input[@id='createLeadForm_generalProfTitle']").fill("Splaywright1Title");

    await page.locator("//input[@id='createLeadForm_annualRevenue']").fill("2550000");

    await page.locator("//input[@id='createLeadForm_departmentName']").fill("Splaywright1Department");

    await page.locator("//input[@id='createLeadForm_primaryPhoneNumber']").fill("9696565623");

    await page.waitForTimeout(2000);

    await page.locator("//input[@value='Create Lead']").click();

    await page.waitForTimeout(3000);

    console.log("Entered Company Name is "+await page.locator('#viewLead_companyName_sp').textContent());

    console.log("Entered First Name is "+await page.locator('#viewLead_firstName_sp').textContent());

    console.log("Entered Last Name is "+await page.locator('#viewLead_lastName_sp').textContent());

    console.log("Status of the record is "+await page.locator('#viewLead_statusId_sp').textContent());

    await page.waitForTimeout(2000);

    page.close;

    context.close;

    browser.close;

}
)
