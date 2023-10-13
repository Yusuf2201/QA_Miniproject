const { remote , By} = require("webdriverio")

class LoginPage {
	// initialization
	constructor (driver) {
		/** @type {WebdriverIO.Browser} */
		this.driver = driver
	}

	// element locators
	  get SelectCountryE1() {	return this.driver.$('//hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.RelativeLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.Spinner') }
	  get inputNameE1() { return this.driver.$('//hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.RelativeLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.EditText')}
	  get selectGenderMaleE1() { return this.driver.$('//hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.RelativeLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.RadioGroup/android.widget.RadioButton[1]') }
	  get selectGenderFemaleE1() { return this.driver.$('//hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.RelativeLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.RadioGroup/android.widget.RadioButton[2]')}
	  get letsToShopE1() { return this.driver.$('//hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.RelativeLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.Button')}
	  get failedloginE1(){return this.driver.$('//hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.RelativeLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.Button')}
	  get SelectIndonesiaE1() { return this.driver.$('//android.widget.TextView[@text="Andorra"]') }
	
	// page actions
	async SelectCountry () {
		await this.driver.pause(1000)
		await this.SelectCountryE1.click()
		await this.driver.pause(2000)
		const countryToSelect = await this.driver.$('//android.widget.TextView[@text="Andorra"]');
		await countryToSelect.waitForDisplayed({ timeout: 10000 }); 
		// await countryToSelect.scrollIntoView();
		await countryToSelect.click();
	}
	async InputName () {
		await this.inputNameE1.setValue('yusuf')
	}
	async selectMale () {
		await this.selectGenderMaleE1.click()
	}
	async checkedMale () {
		return await this.selectGenderMaleE1.isSelected()
	}
	async selectFemale () {
		await this.selectGenderFemaleE1.click()
	}
	async checkedtFemale () {
		return await this.selectGenderFemaleE1.isSelected()
	}
	async LogintoShop () {
		await this.SelectCountryE1.click()
		const countryToSelect = await this.driver.$('//android.widget.TextView[@text="Andorra"]');
		await countryToSelect.waitForDisplayed({ timeout: 10000 }); 
		await countryToSelect.click();
		await this.inputNameE1.setValue('yusuf')
		await this.selectGenderMaleE1.click()
		await this.letsToShopE1.click()
	}
	async toShop () {
		await this.letsToShopE1.click()
	}

	async failedLogin () {
		return await this.failedloginE1.getText()
	}
	async getCountry () {
		return await this.SelectIndonesiaE1.getText()
	}
}

module.exports = LoginPage