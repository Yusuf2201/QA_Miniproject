const { expect } = require('chai')
const setupDriver = require('../utils/setupDriver')
const LoginPage = require('../pageobjects/LoginPage')
const InventoryPage = require('../pageobjects/InventoryPage')

describe('generalstore', function () {
	/** @type {WebdriverIO.Browser} */ let driver
	/** @type {LoginPage} */ let loginPage
	/** @type {InventoryPage} */ let inventoryPage
	before(async function () {
		driver = await setupDriver()
		loginPage = new LoginPage(driver)
		inventoryPage = new InventoryPage(driver)
	})
	describe('Negatif Test Login', function () {
		it('Log_001_langsung menekan menuju belanja', async function () {
			await loginPage.toShop()
			const check = await loginPage.failedLogin()
			expect(check).to.include('Let\'s  Shop')
		})
	})
	describe('Positif Test Login', function () {
		it('Log_002_Mengisi Negara Andorra', async function () {
			await loginPage.SelectCountry()
			const check = await loginPage.getCountry()
			expect(check).to.include('Andorra')
		})
		it('Log_003_Mengecek tombol male', async function () {
			await loginPage.selectMale()
			const check = await loginPage.checkedtFemale()
			expect(check).to.equal(false)
		})
		it('Log_004_Mengecek tombol female', async function () {
			await loginPage.selectFemale()
			const check = await loginPage.checkedMale()
			expect(check).to.equal(false)
		})
		it('Log_005_Menekan tombol lets Shop', async function () {
			await loginPage.InputName()
			await loginPage.toShop()
			const check = await inventoryPage.getTittleProduct()
			expect(check).to.include('Products')

		})
	})

	after(async function () {
		await driver.deleteSession()
	})
})