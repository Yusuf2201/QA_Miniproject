const { By, until } = require('selenium-webdriver')
const Page = require('./Page')

class CartPage extends Page {
	constructor (driver) {
		super(driver)
	}
	DeleteE2 = By.xpath("//a[text()='Delete']")
	placeorderE2 = By.css('#page-wrapper > div > div.col-lg-1 > button')	
	toCartE2 = By.css('#navbarExample > ul > li:nth-child(4) > a')
	checkE2= By.css('#tbodyid > tr > td:nth-child(2)')
	amountE2 = By.css('#totalp')
	FormPlaceOrderE2 = By.css('#orderModalLabel')
	succesPurchaseE2 = By.css('body > div.sweet-alert.showSweetAlert.visible > h2')
	FinishOrderE2 = By.css('body > div.sweet-alert.showSweetAlert.visible > div.sa-button-container > div > button')

	nameE2 = By.css('#name')
	countryE2 = By.css('#country')
	cityE2 = By.css('#city')
	cardE2 = By.css('#card')
	monthE2 = By.css('#month')
	yearE2 = By.css('#year')

	submitE2 = By.css('#orderModal > div > div > div.modal-footer > button.btn.btn-primary')

	// page action
	async openPage () {
		await this.openUrl('/cart.html')
	}
	/**
	 * fungsi ini digunakan untuk melakukan purchase
	 * @param {string} name
	 * @param {string} country
	 * @param {string} city
	 * @param {string} card
	 * @param {string} month
	 * @param {string} year
	 */
	async purchaseProcess (name, country, city, card, month, year) {
		await this.driver.findElement(this.nameE2).sendKeys(name)
		await this.driver.findElement(this.countryE2).sendKeys(country)
		await this.driver.findElement(this.cityE2).sendKeys(city)
		await this.driver.findElement(this.cardE2).sendKeys(card)
		await this.driver.findElement(this.monthE2).sendKeys(month)
		await this.driver.findElement(this.yearE2).sendKeys(year)
		await this.driver.findElement(this.submitE2).click()
	}
	async clearData () {
		await this.driver.findElement(this.countryE2).clear()
		await this.driver.findElement(this.cityE2).clear()
		await this.driver.findElement(this.cardE2).clear()
		await this.driver.findElement(this.monthE2).clear()
		await this.driver.findElement(this.yearE2).clear()
	}

	async Delete () {
		return await this.driver.findElement(this.DeleteE2).click()
	}
	async Check () {
		return await this.driver.findElement(this.checkE2).getText()
	}
	async succesPurchase() {
		return await this.driver.findElement(this.succesPurchaseE2).getText()
	}
	async Amount () {
		return await this.driver.findElement(this.amountE2).getText()
	}
	async SuccestoPlaceOrder() {
		return await this.driver.findElement(this.FormPlaceOrderE2).getText()
	}
	async toCart () {
		return await this.driver.findElement(this.toCartE2).click()
	}
	async placeOrder () {
		return await this.driver.findElement(this.placeorderE2).click()
	}
	async finishOrder () {
		return await this.driver.findElement(this.FinishOrderE2).click()
	}
	async SuccesAdd () {
		await this.driver.wait(until.alertIsPresent(), 5000)
		await this.driver.switchTo().alert().accept()
	}
}

module.exports = CartPage

