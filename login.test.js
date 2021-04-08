const puppeteer = require('puppeteer');

test("Check for XSS attack on email field", async () => {

  const browser = await puppeteer.launch();
  try {
    const page = await browser.newPage();
  
    await page.goto('http://localhost:5000');

    await page.type('#userEmail', '<input type="file" />');
    await page.type('#userPassword', 'password');
    await page.click('#submitButton');

    let emailContainer = await page.$('#infoDisplay')
    let value = await emailContainer.evaluate(el => el.textContent);
    
    expect(value.length).toBeGreaterThan(0);
  } finally {
    await browser.close();
  }
  
  
}, 120000);