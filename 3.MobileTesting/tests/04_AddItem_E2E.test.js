const { expect } = require('chai')
const setupDriver = require('../utils/setupDriver')
const LoginPage = require('../pageobjects/LoginPage')
const InventoryPage = require('../pageobjects/InventoryPage')
const CartPage = require('../pageobjects/CartPage')

describe('generalstore', function () {
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
	
	describe('melakukan pemesanan item', function () {
	it('E2E_001_Login menuju belanja', async function () {
		await loginPage.LogintoShop()
		const check = await inventoryPage.getTittleProduct()
		expect(check).to.include('Products')
	})
	it('E2E_002_Memasukkan barang dan mengecek di keranjang', async function () {
		await inventoryPage.addtoCart1()
		const check = await inventoryPage.amountCart()
		expect(check).to.include('1')
	})
	it('E2E_003_Mengecek barang yang ada di keranjang', async function () {
		await cartPage.toCart()
		const check = await cartPage.itemInCart()
		expect(check).to.include('Air Jordan 4 Retro')
	})
})

	after(async function () {
		await driver.deleteSession()
	})
})