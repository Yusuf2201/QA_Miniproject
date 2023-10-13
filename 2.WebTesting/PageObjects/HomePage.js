const { By, until } = require('selenium-webdriver')
const Page = require('./Page')

class HomePage extends Page {
	constructor (driver) {
		super(driver)
	}
	toProductE1 = By.css('#tbodyid > div:nth-child(1) > div > div > h4 > a')
	toCartE1 = By.css('#tbodyid > div.row > div > a')

	CategoriE1 = By.xpath("//a[text()='CATEGORIES']") 
	CatePhone = By.xpath("//a[text()='Phones']")  
	CateLapt = By.xpath("//a[text()='Laptops']") 
	CateMoni = By.xpath("//a[text()='Monitors']") 
	LogoutE1 = By.css('#logout2')
	resultSort= By.css('#tbodyid > div:nth-child(1) > div > div > h4 > a')
	nextE1 = By.css('#next2')
	previousE1 = By.css('#prev2')
	carouseNextE1 = By.css('#carouselExampleIndicators > a.carousel-control-next > span.carousel-control-next-icon')
	carousePrevE1 = By.css('#carouselExampleIndicators > a.carousel-control-prev > span.carousel-control-prev-icon')

	toAboutUsE1 = By.css('#navbarExample > ul > li:nth-child(3) > a')
	playAboutUsE1= By.css('#example-video > button')
	pauseAboutUsE1 = By.css('<span class="vjs-control-text" aria-live="polite">Play</span>')
	bUttonXE1 = By.css('#videoModal > div > div > div.modal-header > button > span')
	closeAboutUsE1 = By.css('#videoModal > div > div > div.modal-footer > button')

	toContactE1 = By.css('#navbarExample > ul > li:nth-child(2) > a')
	closeContactE1= By.css('#exampleModal > div > div > div.modal-footer > button.btn.btn-secondary')
	buttonXE1=By.css('#exampleModal > div > div > div.modal-header > button > span')
	succesContactUsE1=By.css('#exampleModalLabel')
	sendContactE1=By.css('#exampleModal > div > div > div.modal-footer > button.btn.btn-primary')
	contactEmailE1= By.css('#recipient-email')
	contactNameE1= By.css('#recipient-name')
	contactMassageE1= By.css('#message-text')
	
	// By.css('')
	// By.css('')

	// page action
	async openPage () {
		await this.openUrl('/')
	}

   /**
	 * fungsi ini digunakan untuk mengisi form massage contact
	 * @param {string} email
	 * @param {string} name
	 * @param {string} massage
	 */
	async massageProcess (email, name, massage) {
		await this.driver.findElement(this.contactEmailE1).sendKeys(email)
		await this.driver.findElement(this.contactNameE1).sendKeys(name)
		await this.driver.findElement(this.contactMassageE1).sendKeys(massage)
		await this.driver.findElement(this.sendContactE1).click()
		await this.driver.sleep(1000)
	}
	

	async SecondNext () {
        await this.driver.findElement(this.carouseNextE1).click()
	}
	async SecondPrev() {
        await this.driver.findElement(this.carousePrevE1).click()
	}
	async Next () {
        await this.driver.findElement(this.nextE1).click()
	}
	async Previous() {
        await this.driver.findElement(this.previousE1).click()
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


	async toAboutUs () {
        await this.driver.findElement(this.toAboutUsE1).click()
	}
	async succesToAboutUs () {
		return await this.driver.findElement(this.closeAboutUsE1).getText()
	}
	async playAboutUs () {
        await this.driver.findElement(this.playAboutUsE1).click()
	}
	async succesPlayAboutUs () {
        return await this.driver.findElement(this.pauseAboutUsE1).getText()
	}
	async pauseAboutUs () {
        await this.driver.findElement(this.pauseAboutUsE1).click()
	}
	async succesPauseAboutUs () {
        return await this.driver.findElement(this.pauseAboutUsE1).getText()
	}
	async closeAboutUs () {
        await this.driver.findElement(this.closeAboutUsE1).click()
	}

	async toContactUs () {
        await this.driver.findElement(this.toContactE1).click()
	}
	async succesContactUs () {
		return await this.driver.findElement(this.succesContactUsE1).getText()
	}
	


	async addToCart () {
        await this.driver.findElement(this.toProductE1).click()
		await this.driver.sleep(4000)
        await this.driver.findElement(this.toCartE1).click()
	}
	async toProduct () {
        await this.driver.findElement(this.toProductE1).click()
	}
	async addToCart2 () {
        await this.driver.findElement(this.toCartE1).click()
	}
	async SuccesGetProduct() {
		const a = await this.driver.wait(until.elementLocated(this.toCartE1), 5000)
		return await a.getText()
	}



	async category () {
		return await this.driver.findElement(this.CategoriE1).getText()
	}
	async ResultSort () {
		return await this.driver.findElement(this.resultSort).getText()
	}
	async Logout () {
		return await this.driver.findElement(this.logoutE1).click()
	}

	async scroll () {
		await this.driver.executeScript(function(){
			document.querySelector('html').scrollTo({top:1000,behavior:'smooth'})
		})
	}

	

	
}

module.exports = HomePage

