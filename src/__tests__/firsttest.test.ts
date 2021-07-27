import { Builder, Capabilities, By, until, WebDriver } from "selenium-webdriver";

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()
// All the boilerplate

class AmazonPage {
    driver: WebDriver
    url: string = 'https://www.amazon.com/'
    logo: By = By.className("nav-logo-link nav-progressive-attribute");

}

test('open amazon and check logo', async ()=> {

await driver.get('https://www.amazon.com');
let logo = await driver.findElement(By.className("nav-logo-link nav-progressive-attribute"));
await logo.click();



})