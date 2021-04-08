const {Builder, By, Key, until} = require('selenium-webdriver');

test("Check for XSS attack on email field", async () => {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://localhost:5000');
    await driver.findElement(By.id('userEmail')).sendKeys('<input type="file" />');
    await driver.findElement(By.id('userPassword')).sendKeys('fikayo');

    

    //Submit
    await driver.findElement(By.id('submitButton')).click();

    const emailText = await driver.findElement(By.id('infoDisplay')).getText();

    expect(emailText.length).toBeGreaterThan(0);

    

  } finally {
    await driver.quit();
  }
  
}, 120000);

/* const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://localhost:5000');
    await driver.findElement(By.id('userEmail')).sendKeys('fik4christ@yahoo.com');
    await driver.findElement(By.id('userPassword')).sendKeys('fikayo');

    

    //Submit
    await driver.findElement(By.id('submitButton')).click();

    const emailText = await driver.findElement(By.id('infoDisplay')).getText();

    console.log(emailText);
    console.log(emailText.length);

  } finally {
    await driver.quit();
  }
})(); */