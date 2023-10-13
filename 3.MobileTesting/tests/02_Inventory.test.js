const { expect } = require('chai')
const setupDriver = require('../utils/setupDriver')
const LoginPage = require('../pageobjects/LoginPage')
const InventoryPage = require('../pageobjects/InventoryPage')

describe('', function () {
	/** @type {WebdriverIO.Browser} */ let driver
	/** @type {LoginPage} */ let loginPage
	/** @type {InventoryPage} */ let inventoryPage
	before(async function () {
		driver = await setupDriver()
		loginPage = new LoginPage(driver)
		inventoryPage = new InventoryPage(driver)
	})
	
	describe('Positif Test Inventory', function () {
	it('Inv_001_tanpa memasukkan item ke keranjang', async function () {
		await loginPage.LogintoShop()
		await inventoryPage.toCart()
		const check = await inventoryPage.failedaddtoCart()
		expect(check).to.include('ADD TO CART')
	})
	it('Inv_002_Memasukkan 1 item ke keranjang', async function () {
		await inventoryPage.addtoCart1()
		const check = await inventoryPage.amountCart()
		expect(check).to.include('1')
	})
	it('Inv_003_Memasukkan 2 item ke keranjang', async function () {
		await inventoryPage.addtoCart2()
		const check = await inventoryPage.amountCart()
		expect(check).to.include('2')
	})
	it('Inv_004_Menghapus 1 item', async function () {
		await inventoryPage.removeAdd()
		const check = await inventoryPage.amountCart()
		expect(check).to.include('1')
	})
})

	after(async function () {
		await driver.deleteSession()
	})
})