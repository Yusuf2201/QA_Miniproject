const { By } = require('selenium-webdriver')
const Page = require('./Page')

class HomePage extends Page {
	constructor (driver) {
		super(driver)
	}
	getHp = By.css('#tbodyid > div:nth-child(1) > div > div > h4 > a')
	toCart = By.css('#tbodyid > div.row > div > a')
	CatePhone = By.xpath("//a[text()='Phones']")  
	CateLapt = By.xpath("//a[text()='Laptops']") 
	CateMoni = By.xpath("//a[text()='Monitors']") 
	LogoutE1 = By.css('#logout2')
	resultSort= By.css('#tbodyid > div:nth-child(1) > div > div > h4 > a')


	// page action
	async openPage () {
		await this.openUrl('/')
	}
   
	async addToCart () {
        await this.driver.findElement(this.getHp).click()
		await this.driver.sleep(3000)
        await this.driver.findElement(this.toCart).click()
	}
	async addToCart2 () {
        await this.driver.findElement(this.toCart).click()
	}
	async SortPhone () {
        await this.driver.findElement(this.CatePhone).click()
	}
	async SortLaptop () {
		await this.driver.findElement(this.CateLapt).click()
	}
	async SortMonitor () {
        await this.driver.findElement(this.CateMoni).click()
	}
	async ResultSort () {
		return await this.driver.findElement(this.resultSort).getText()
	}
	async Logout () {
		return await this.driver.findElement(this.logoutE1).click()
	}
	

	
}

module.exports = HomePage

