const { By, WebDriver } = require('selenium-webdriver')
const { expect } = require('chai')
const SetupDriver = require('../Utils/SetupDriver')
const LoginPage = require('../PageObjects/LoginPage')

describe.skip('Test Login', function () {
	/** @type {WebDriver} */ let driver
	/** @type {LoginPage} */ let loginPage
  
	before(async function () {
		driver = await SetupDriver()
		loginPage = new LoginPage(driver)

	})
    describe("Test Positif Login", () => {
        it('coba login dengan email dan password yang benar', async function () {
            await loginPage.openPage()
            await loginPage.loginProcess('yusuf2222', 'babyshark123K')
            await driver.sleep(1000)
            const Login= await loginPage.SuccesLogin()
            await driver.sleep(2000)
            expect(Login).to.be.equal('Welcome yusuf2222')
            await driver.sleep(2000)
            await loginPage.Logout()
            await driver.sleep(2000)
            })
        })
    describe.skip("Test Negatif Login", () => {
        it('coba login dengan email salah dan password benar', async function () {
            await loginPage.openPage()
            await driver.sleep(1000)
            await loginPage.loginProcess('yusuf2222', '1234')
            await driver.sleep(1000)
            const alert = await driver.switchTo().alert()
            const actualErrorMessage = await alert.getText()
            await alert.accept()
            expect(actualErrorMessage).to.include('Wrong password.');
        })

        it('coba login dengan email salah dan password benar', async function () {
            await loginPage.cleardata()
            await loginPage.loginProcess('yusuf', 'babyshark123K')
            await driver.sleep(1000)
            const alert = await driver.switchTo().alert()
            const actualErrorMessage = await alert.getText()
            await alert.accept()
            expect(actualErrorMessage).to.include('Wrong password.');
        })

        it('coba login dengan email kosong dan password benar', async function () {
            await loginPage.cleardata()
            await loginPage.loginProcess('', 'babyshark123K')
            await driver.sleep(1000)
            const alert = await driver.switchTo().alert()
            const actualErrorMessage = await alert.getText()
            await alert.accept()
            expect(actualErrorMessage).to.include('Please fill out Username and Password.');
        })
        it('coba login dengan email benar dan password kosong', async function () {
            await loginPage.cleardata()
            await loginPage.loginProcess('yusuf2222', '')
            await driver.sleep(1000)
            const alert = await driver.switchTo().alert()
            const actualErrorMessage = await alert.getText()
            await alert.accept()
            expect(actualErrorMessage).to.include('Please fill out Username and Password.');
        })
        it('coba login dengan email kosong dan password kosong', async function () {
            await loginPage.cleardata()
            await loginPage.loginProcess('', '')
            await driver.sleep(1000)
            const alert = await driver.switchTo().alert()
            const actualErrorMessage = await alert.getText()
            await alert.accept()
            expect(actualErrorMessage).to.include('Please fill out Username and Password.');
        })
	})
   
	afterEach(async function () {
		await driver.sleep(2000)
	})

	after(async function () {
		await driver.close()
	})
})