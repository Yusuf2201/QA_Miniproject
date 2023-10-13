const { expect } = require('chai')
const setupDriver = require('../utils/setupDriver')
const LoginPage = require('../pageobjects/LoginPage')
const InventoryPage = require('../pageobjects/InventoryPage')
const CartPage = require('../pageobjects/CartPage')

describe('', function () {
	/** @type {WebdriverIO.Browser} */ let driver
	/** @type {LoginPage} */ let loginPage
	/** @type {InventoryPage} */ let inventoryPage
	/** @type {CartPage} */ let cartPage
	before(async function () {
		driver = await setupDriver()
		loginPage = new LoginPage(driver)
		inventoryPage = new InventoryPage(driver)
		cartPage = new CartPage(driver)
	})
	
	describe('Positif Test CartPage', function () {
	it('Cart_001_Memasukkan item ke keranjang', async function () {
		await loginPage.LogintoShop()
		await inventoryPage.addtoCart1()
		await cartPage.toCart()
		const check = await cartPage.itemInCart()
		expect(check).to.include('Air Jordan 4 Retro')
	})
	//masih salah
	it('Cart_002_melakukan checked', async function () {
		await cartPage.checked()
		const check = await cartPage.trueChecked()
		expect(check).to.equal(true)
	})
	it('Cart_003_tanpa melakukan checked', async function () {
		await cartPage.checked()
		const check = await cartPage.falseChecked()
		expect(check).to.equal(true)
	})
})

	after(async function () {
		await driver.deleteSession()
	})
})