const { WebDriver, until } = require('selenium-webdriver')
const { expect } = require('chai')
const SetupDriver = require('../Utils/SetupDriver')
const CartPage = require('../PageObjects/CartPage')
const  HomePage= require('../PageObjects/HomePage')

describe('Test Cart', function () {
	/** @type {WebDriver} */ let driver
	/** @type {CartPage} */ let cartPage
    /** @type {HomePage} */ let homePage
  
	before(async function () {
		driver = await SetupDriver()
		cartPage = new CartPage(driver)
        homePage = new HomePage(driver)
      
	})
    describe("Test Positif CartPage", () => {
        it('Cart_001_emasukkan barang ke dalam keranjang', async function () {
            await homePage.openPage()
            await driver.sleep(5000)
            await homePage.addToCart()
            await cartPage.SuccesAdd()
            await homePage.addToCart2()
            await cartPage.SuccesAdd()
            await driver.sleep(2000)
            await cartPage.toCart()
            await driver.sleep(4000)
            const check = await cartPage.Check()
            expect(check).to.include('Samsung galaxy s6')
            })
         it('Cart_002_menghapus barang dari keranjang', async function () {
            await driver.sleep(2000)
            await cartPage.Delete()
            await driver.sleep(8000)
            const check = await cartPage.Amount()
            expect(check).to.include('360')
            })
         it('Cart_003_menekan tombol pembelian untuk menuju form pembelian', async function () {
            await cartPage.placeOrder()
            await driver.sleep(5000)
            const check = await cartPage.SuccestoPlaceOrder()
            expect(check).to.include('Place order')
            })
        })

    describe("Test Negatif Form pembelian", () => {
        it('Cart_004_mengisi form dengan nama kosong', async function () {
            await cartPage.purchaseProcess('', 'Surga','Dunia','123','bulanbulin','2023')

            await driver.wait(until.alertIsPresent(), 5000)
            const alert = await driver.switchTo().alert()
            const actualErrorMessage = await alert.getText()
            await alert.accept()
            expect(actualErrorMessage).to.include('Please fill out Name and Creditcard.');
        })
        it('Cart_005_mengisi form dengan id card kosong', async function () {
            await cartPage.clearData()
            await cartPage.purchaseProcess('josmas', 'Surga','Dunia','','bulanbulin','2023')
            await driver.wait(until.alertIsPresent(), 5000)
            const alert = await driver.switchTo().alert()
            const actualErrorMessage = await alert.getText()
            await alert.accept()
            expect(actualErrorMessage).to.include('Please fill out Name and Creditcard.');
        })
	})
    describe("Test positif Form pembelian", () => {
        it('Cart_006_mengisi form dengan nama kosong', async function () {
            await cartPage.clearData()
            await cartPage.purchaseProcess('josmas', 'Surga','Dunia','123','bulanbulin','2023')
            await driver.sleep(5000)
            const check = await cartPage.succesPurchase()
            expect(check).to.include('Thank you for your purchase!')
        })
	})
   
	afterEach(async function () {
		await driver.sleep(2000)
	})

	after(async function () {
		await driver.close()
	})
})