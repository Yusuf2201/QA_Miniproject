const { By } = require('selenium-webdriver')
const Page = require('./HomePage')

class RegisPage extends Page {
	constructor (driver) {
		super(driver)
	}
	toSignIn = By.css('#signin2')
	usernameEl = By.css('#sign-username')
	passwordEl = By.css('#sign-password')
	submitEl = By.css('#signInModal > div > div > div.modal-footer > button.btn.btn-primary')
	// errorEl = By.css('div[class="banner banner--error text-start"]')
	
	// page action
	async openPage () {
		await this.openUrl()
		await this.driver.findElement(this.toSignIn).click()
	}

	async Allert () {
		return await this.driver.switchTo().alert.getText()
	}
	
	/**
	 * fungsi ini digunakan untuk melakukan Registrasi
	 * @param {string} username
	 * @param {string} password
	 */
	async RegisProcess (username, password) {
		await this.driver.findElement(this.usernameEl).sendKeys(username)
		await this.driver.findElement(this.passwordEl).sendKeys(password)
		await this.driver.findElement(this.submitEl).click()
		await this.driver.sleep(1000)
	}
	async cleardata () {	
		await this.driver.findElement(this.usernameEl).clear(); 
		await this.driver.findElement(this.passwordEl).clear(); 
	}

}

module.exports = RegisPage

