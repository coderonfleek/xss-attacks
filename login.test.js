const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://localhost:5000');
    await driver.findElement(By.id('userEmail')).sendKeys('fik4christ@yahoo.com');
    await driver.findElement(By.id('userPassword')).sendKeys('fikayo');

    

    //Submit
    await driver.findElement(By.id('submitButton')).click();

    const emailText = await driver.wait(driver.findElement(By.id('infoDisplay')).getText(), 1000);

    console.log(emailText);

    //await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
    /* 
    await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    await driver.wait(until.titleIs('webdriver - Google Search'), 1000); */
  } finally {
    await driver.quit();
  }
})();