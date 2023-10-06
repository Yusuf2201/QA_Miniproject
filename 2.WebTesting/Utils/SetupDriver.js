const { Builder, Browser } = require('selenium-webdriver')
const {Options} = require('selenium-webdriver/chrome')
async function setupDriver () {
	const options = new Options()
	options.addArguments('start-maximized')
	const driver = await new Builder()
		.forBrowser(Browser.CHROME)
		.setChromeOptions(options)
		.build()

	return driver
}

module.exports = setupDriver