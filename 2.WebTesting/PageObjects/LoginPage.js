const { By,until } = require('selenium-webdriver')
const Page = require('./HomePage')

class LoginPage extends Page {
	constructor (driver) {
		super(driver)
	}
	toLogin = By.css('#login2')
	usernameEl = By.css('#loginusername')
	passwordEl = By.css('#loginpassword')
	submitEl = By.xpath('//button[text()="Log in"]')
	closeEl = By.xpath('//button[text()="Close"]')
	succes = By.css('#nameofuser')
	LogoutE1 = By.css('#logout2')
	
	// page action
	async openPage () {
		await this.openUrl()
		await this.driver.sleep(7000)
		await this.driver.findElement(this.toLogin).click()
		await this.driver.sleep(5000)
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
	async SuccesLogin () {
		// const a = await this.driver.wait(until.elementLocated(this.succes), 10000);
		// return await a.getText();
		await this.driver.sleep(10000)
		return await this.driver.findElement(this.succes).getText()
	}
	async closeLogin () {
		// const a = await this.driver.wait(until.elementLocated(this.closeEl), 10000);
		// return await a.getText();
		return await this.driver.findElement(this.closeEl).getText()
	}
	async Logout () {
		await this.driver.findElement(this.LogoutE1).click()
	}
	async ToLogin () {
		await this.driver.findElement(this.toLogin).click()
	}
	async ButtonLoginText () {
		// const a = await this.driver.wait(until.elementLocated(this.submitEl), 10000);
		// return await a.getText();
		return await this.driver.findElement(this.submitEl).getText()
	}
	async Allert () {
		
		return await this.driver.switchTo().alert.getText().accept()
	}
}

module.exports = LoginPage

