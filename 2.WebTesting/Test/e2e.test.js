const { By, WebDriver } = require('selenium-webdriver')
const { expect } = require('chai')
const SetupDriver = require('../Utils/SetupDriver')
const  HomePage= require('../PageObjects/HomePage')
const  LoginPage= require('../PageObjects/LoginPage')
const CartPage = require('../PageObjects/CartPage')


describe('', function () {
	/** @type {WebDriver} */ let driver
	/** @type {HomePage} */ let homePage
    /** @type {LoginPage} */ let loginPage
    /** @type {CartPage} */ let cartPage
	before(async function () {
		driver = await SetupDriver()
		homePage = new HomePage(driver)
        loginPage = new LoginPage(driver)
        cartPage = new CartPage(driver)
	})
    describe.only("Test End to End", () => {
        
        it('membuka page', async function () {
            await homePage.openPage()
        })
        it('masukke menu login ', async function () {
            await loginPage.ToLogin()
        })
        it('mengisi form login ', async function () {
            await loginPage.loginProcess('yusuf2222', 'babyshark123K')
        })
        it('memasukkan barang ke keranjang', async function () {
            await homePage.addToCart()
            await cartPage.SuccesAdd()
        })  
        it('pindah ke halaman keranjang', async function () {
            await cartPage.toCart()
        })  
        it('melakukan pembelian dengan menekan tombol purchase', async function () {
            await cartPage.placeOrder()
        })  
        it('mengisi form purchase dan melakukan pembelian', async function () {
            await cartPage.purchaseProcess('josmas', 'Surga','Dunia','123','bulanbulin','2023')
        })
        it('selesai melakukan pembelian', async function () {
            await cartPage.finishOrder()
        })
        it('logout akun', async function () {
            await driver.sleep(2000)
            await loginPage.Logout()
        })
    })
   
	afterEach(async function () {
		await driver.sleep(2000)
	})

	after(async function () {
		await driver.close()
	})
})