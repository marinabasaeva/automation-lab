const {Builder, Capabilities, By} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async() => {
    await driver.get('http://127.0.0.1:5500/movieList/index.html')
})

afterAll(async() => {
    await driver.quit()
})

test('Functionality of the Movie List app', async () => {

    await driver.findElement(By.xpath(`//input`)).sendKeys(`Inception`);
    await driver.findElement(By.xpath(`//button[text()='Add']`)).click();
    await driver.sleep(2000)

    await driver.findElement(By.xpath(`//li/span[text()='Inception']`)).click();
    await driver.sleep(2000)

    const movie = await driver.findElement(By.xpath(`//main/aside[text()='Inception watched!']`))
    const displayed =  movie.isDisplayed()
    expect(displayed).toBeTruthy();
    await driver.sleep(1000);

    
})