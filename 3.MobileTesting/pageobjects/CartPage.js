const { remote } = require("webdriverio")

class CartPage {
	// initialization
	constructor (driver) {
		/** @type {WebdriverIO.Browser} */
		this.driver = driver
	}

	get toCartE2()  { return this.driver.$('//hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.LinearLayout/android.view.ViewGroup/android.widget.RelativeLayout/android.widget.LinearLayout[2]/android.widget.FrameLayout/android.widget.ImageButton') }
	get shoesInCartE3()  { return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.RelativeLayout/android.widget.RelativeLayout/android.support.v7.widget.RecyclerView/android.widget.RelativeLayout[1]/android.widget.LinearLayout/android.widget.TextView[@text="Air Jordan 4 Retro"]') }
    get checkedE3()  { return this.driver.$('//hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.RelativeLayout/android.widget.RelativeLayout/android.widget.LinearLayout/android.widget.CheckBox') }
	get checkedTrueE3()  { return this.driver.$('//hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.RelativeLayout/android.widget.RelativeLayout/android.widget.LinearLayout/android.widget.CheckBox[@checked="true"]') }
	get checkedFalseE3()  { return this.driver.$('//hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.RelativeLayout/android.widget.RelativeLayout/android.widget.LinearLayout/android.widget.CheckBox[@checked="false"]') }
	// element locators
	get j()  { return this.driver.$('/') }
    
    // page actions
	async toCart () {
        await this.toCartE2.click()
	}
	async checked () {
        await this.checkedE3.click()
	}
    async trueChecked () {
        return await this.checkedTrueE3.isExisting()
		
	}
	async falseChecked () {
        return await this.checkedFalseE3.isExisting()
	}
	async itemInCart() {
		await this.driver.pause(3000)
        return await this.shoesInCartE3.getText()
    }
}

module.exports = CartPage
