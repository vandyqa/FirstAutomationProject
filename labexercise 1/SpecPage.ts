import { By,until, WebDriver } from "selenium-webdriver";  //setting up of page model SpecPage.ts

export class SpecPage{              //exporting the class to specifications.test.ts
driver:WebDriver;
url:string = "https://www.google.com";

searchbar:By=By.className("gLFyf gsfi");
results : By=By.id("rso");


constructor (driver:WebDriver) {

    this.driver=driver;
}

async navigate() {
await this.driver.get(this.url);
await this.driver.wait(until.elementLocated(this.searchbar));
await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.searchbar)));

}

async sendKeys(elementBy:By,keys){

await this.driver.wait(until.elementLocated(elementBy));
return this.driver.findElement(elementBy).sendKeys(keys);
}

async getText(elementBy: By) {
    await this.driver.wait(until.elementLocated(elementBy));
    return (await this.driver.findElement(elementBy)).getText();
  }

  async doSearch(text: string) {
    return this.sendKeys(this.searchbar, `${text}\n`);
  }

  async getResults() {
    return this.getText(this.results);
  }
}





