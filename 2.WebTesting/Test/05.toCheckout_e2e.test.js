const { until, WebDriver } = require('selenium-webdriver')
const { expect } = require('chai')
const SetupDriver = require('../Utils/SetupDriver')
const RegisPage = require('../PageObjects/RegisPage')
const  HomePage= require('../PageObjects/HomePage')
const  LoginPage= require('../PageObjects/LoginPage')
const CartPage = require('../PageObjects/CartPage')


describe('', function () {
	/** @type {WebDriver} */ let driver
    /** @type {RegisPage} */ let regisPage
	/** @type {HomePage} */ let homePage
    /** @type {LoginPage} */ let loginPage
    /** @type {CartPage} */ let cartPage

	before(async function () {
		driver = await SetupDriver()
        regisPage = new RegisPage(driver)
		homePage = new HomePage(driver)
        loginPage = new LoginPage(driver)
        cartPage = new CartPage(driver)
	})
    describe("Test End to End", () => {
        
        it('E2E_001_Membuka page', async function () {
            await homePage.openPage()
            await driver.sleep(2000)
            const check = await homePage.category()
            expect(check).to.be.equal('CATEGORIES')
        })
        it('E2E_002_Masuk ke menu login ', async function () {
            await loginPage.ToLogin()
            await driver.sleep(3000)
            const check = await loginPage.ButtonLoginText()
            expect(check).to.be.equal('Log in')
        })
        it('E2E_003_Mengisi form login ', async function () {
            await loginPage.loginProcess('yusuf2222', 'babyshark123K')
            await driver.sleep(7000)
            const check= await loginPage.SuccesLogin()
            await driver.sleep(2000)
            expect(check).to.be.equal('Welcome yusuf2222')
        })
        it('E2E_004_Memasukkan barang ke keranjang', async function () {
            await homePage.addToCart()
            await driver.sleep(3000)
		    const alert = await driver.switchTo().alert();
            await driver.wait(until.alertIsPresent(), 5000);
		    const alertText = await alert.getText();
		    await alert.accept();
            expect(alertText).to.include('Product added.');
        })  
        it('E2E_005_ Pindah ke halaman keranjang', async function () {
            await cartPage.toCart()
            await driver.sleep(5000)
            const check = await cartPage.Check()
            expect(check).to.include('Samsung galaxy s6')
            
        })  
        it('E2E_006_Melakukan pembelian dengan menekan tombol purchase', async function () {
            await cartPage.placeOrder()
            await driver.sleep(5000)
            const check = await cartPage.namePlaceOrder()
            expect(check).to.include('Place order')
        })  
        it('E2E_007_mengisi form purchase dan melakukan pembelian', async function () {
            await cartPage.purchaseProcess('josmas', 'Surga','Dunia','123','bulanbulin','2023')
            await driver.sleep(5000)
            const check = await cartPage.succesPurchase()
            expect(check).to.include('Thank you for your purchase!')
        })
        it('E2E_008_selesai melakukan pembelian', async function () {
            await cartPage.finishOrder()
            await driver.sleep(5000)
            const check = await homePage.category()
            expect(check).to.be.equal('CATEGORIES')
        })
        it('E2E_009_logout akun', async function () {
            await driver.sleep(2000)
            await loginPage.Logout()
            await driver.sleep(5000)
            const check = await regisPage.getNameSignup()
            expect(check).to.be.equal('Sign up')
        })
    })
   
	afterEach(async function () {
		await driver.sleep(2000)
	})

	after(async function () {
		await driver.close()
	})
})