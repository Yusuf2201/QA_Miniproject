const { remote } = require("webdriverio")

class InventoryPage {
	// initialization
	constructor (driver) {
		/** @type {WebdriverIO.Browser} */
		this.driver = driver
	}

    // element locators
    get productTittleE2()  { return this.driver.$('//hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.LinearLayout/android.view.ViewGroup/android.widget.RelativeLayout/android.widget.TextView') } 
    get clearAdd()  { return this.driver.$('//hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.RelativeLayout/android.widget.FrameLayout/android.support.v7.widget.RecyclerView/android.widget.RelativeLayout[2]/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.TextView[@text="ADDED TO CART"]') }

    get addShoesE2a()  { return this.driver.$('//hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.RelativeLayout/android.widget.FrameLayout/android.support.v7.widget.RecyclerView/android.widget.RelativeLayout[1]/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.TextView[2]') }
    get addShoesE2b()  { return this.driver.$('//hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.RelativeLayout/android.widget.FrameLayout/android.support.v7.widget.RecyclerView/android.widget.RelativeLayout[2]/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.TextView[@text="ADD TO CART"]') }
    get amountCartE2()  { return this.driver.$('//hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.LinearLayout/android.view.ViewGroup/android.widget.RelativeLayout/android.widget.LinearLayout[2]/android.widget.FrameLayout/android.widget.TextView') }
    get toCartE2()  { return this.driver.$('//hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.LinearLayout/android.view.ViewGroup/android.widget.RelativeLayout/android.widget.LinearLayout[2]/android.widget.FrameLayout/android.widget.ImageButton') }
    get addShoesE2c()  { return this.driver.$('/') }
    
	
    

    // page actions
   
    async getTittleProduct () {
        await this.driver.pause(2000)
        return await this.productTittleE2.getText()
    }
	async addtoCart1 () {
        await this.addShoesE2a.click()
	}
    async failedaddtoCart () {
        return await this.addShoesE2a.getText()
	}

    async removeAdd () {
        await this.clearAdd.click()
	}

    async addtoCart2 () {
        await this.driver.touchPerform([
            { action: 'press', options: { x: 329, y: 900 } },
            { action: "wait", options: { ms: 500 } },
            { action: 'moveTo', options: { x: 329, y: 600 } },
            { action: "release" },
          ]);
        await this.addShoesE2b.click()
	}


    async toCart () {
        await this.toCartE2.click()
	}
    async amountCart() {
        await this.driver.pause(2000)
        return await this.amountCartE2.getText()
    }

}

module.exports = InventoryPage
