const { WebDriver, until } = require('selenium-webdriver')
const { expect } = require('chai')
const SetupDriver = require('../Utils/SetupDriver')
const  HomePage= require('../PageObjects/HomePage')

describe('Test Homepage', function () {
	/** @type {WebDriver} */ let driver
	/** @type {HomePage} */ let homePage
  
	before(async function () {
		driver = await SetupDriver()
		homePage = new HomePage(driver)
      
	})
    describe("Test HomePage Semua", () => {
        it('Sort by Monitor', async function () {
            await homePage.openPage()
            await driver.sleep(6000)
            await homePage.SortMonitor()
            await driver.sleep(6000)
            const hasil= await homePage.ResultSort()
            expect(hasil).to.be.include('Apple monitor')
            })
        it('Sort by Laptop', async function () {
            await homePage.SortLaptop()
            await driver.sleep(6000)
            const hasil= await homePage.ResultSort()
            expect(hasil).to.be.include('Sony vaio i5')
            })
        
        it('Sort by Phone', async function () {
            await homePage.SortPhone()
            await driver.sleep(6000)
            const hasil= await homePage.ResultSort()
            expect(hasil).to.be.include('Samsung galaxy s6')
            })
       

        it('add hp to cart', async function () {
            
            await homePage.addToCart()
            await driver.wait(until.alertIsPresent(), 5000);
		    const alert = await driver.switchTo().alert();
		    const alertText = await alert.getText();
		    await alert.accept();
            expect(alertText).to.include('Product added');
        })
    })
   // kurang previus dan satunya, geser bar, about us, contact us,
	afterEach(async function () {
		await driver.sleep(4000)
	})

	after(async function () {
		await driver.close()
	})
})