const { By } = require('selenium-webdriver')
const Page = require('./HomePage')

class LoginPage extends Page {
	constructor (driver) {
		super(driver)
	}
	toLogin = By.css('#login2')
	usernameEl = By.css('#loginusername')
	passwordEl = By.css('#loginpassword')
	submitEl = By.css('#logInModal > div > div > div.modal-footer > button.btn.btn-primary')
	errorEl = By.css('div[class="banner banner--error text-start"]')
	succes = By.css('#nameofuser')
	LogoutE1 = By.css('#logout2')
	
	// page action
	async openPage () {
		await this.openUrl()
		await this.driver.findElement(this.toLogin).click()
	}
	async ToLogin () {
		await this.driver.findElement(this.toLogin).click()
	}

	async Allert () {
		return await this.driver.switchTo().alert.getText()
	}
	
	/**
	 * fungsi ini digunakan untuk melakukan login
	 * @param {string} username
	 * @param {string} password
	 */
	async loginProcess (username, password) {
		await this.driver.findElement(this.usernameEl).sendKeys(username)
		await this.driver.findElement(this.passwordEl).sendKeys(password)
		await this.driver.findElement(this.submitEl).click()
		await this.driver.sleep(1000)
	}
	async cleardata () {	
		await this.driver.findElement(this.usernameEl).clear(); 
		await this.driver.findElement(this.passwordEl).clear(); 
	}
	async getErrorMessage () {
		return await this.driver.findElement(this.errorEl).getText()
	}
	async SuccesLogin () {
		return await this.driver.findElement(this.succes).getText()
	}
	
	async Logout () {
		await this.driver.findElement(this.LogoutE1).click()
	}
}

module.exports = LoginPage

