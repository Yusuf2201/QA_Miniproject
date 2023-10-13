const { WebDriver } = require('selenium-webdriver')
const { expect } = require('chai')
const SetupDriver = require('../Utils/SetupDriver')
const LoginPage = require('../PageObjects/LoginPage')

describe.only('Test Login', function () {
	/** @type {WebDriver} */ let driver
	/** @type {LoginPage} */ let loginPage
  
	before(async function () {
		driver = await SetupDriver()
		loginPage = new LoginPage(driver)

	})
    describe("Test Positif Login", () => {
        it('Log_001_mencoba login dengan username dan password yang benar', async function () {
            await loginPage.openPage()
            await loginPage.loginProcess('yusuf2222', 'babyshark123K')
            const Login= await loginPage.SuccesLogin()
            expect(Login).to.be.equal('Welcome yusuf2222')
            await driver.sleep(2000)
            await loginPage.Logout()
            await driver.sleep(2000)
            })
        })
    describe("Test Negatif Login", () => {
        it('Log_002_mencoba login dengan username benar dan password salah', async function () {
            await loginPage.ToLogin()
            await loginPage.loginProcess('yusuf2222', '1234')
            await driver.sleep(2000)
            const alert = await driver.switchTo().alert()
            const actualErrorMessage = await alert.getText()
            await alert.accept()
            expect(actualErrorMessage).to.include('Wrong password.');
        })

        it('Log_003_mencoba login dengan username salah dan password benar', async function () {
            await loginPage.cleardata()
            await loginPage.loginProcess('yusuf', 'babyshark123K')
            await driver.sleep(5000)
            const alert = await driver.switchTo().alert()
            const actualErrorMessage = await alert.getText()
            await alert.accept()
            expect(actualErrorMessage).to.include('Wrong password.');
        })

        it('Log_004_mencoba login dengan username kosong dan password benar', async function () {
            await loginPage.cleardata()
            await loginPage.loginProcess('', 'babyshark123K')
            await driver.sleep(2000)
            const alert = await driver.switchTo().alert()
            const actualErrorMessage = await alert.getText()
            await alert.accept()
            expect(actualErrorMessage).to.include('Please fill out Username and Password.');
        })
        it('Log_005_mencoba login dengan username benar dan password kosong', async function () {
            await loginPage.cleardata()
            await loginPage.loginProcess('yusuf2222', '')
            await driver.sleep(2000)
            const alert = await driver.switchTo().alert()
            const actualErrorMessage = await alert.getText()
            await alert.accept()
            expect(actualErrorMessage).to.include('Please fill out Username and Password.');
        })
        it('Log_006_mencoba login dengan  username kosong dan password kosong', async function () {
            await loginPage.cleardata()
            await loginPage.loginProcess('', '')
            await driver.sleep(2000)
            const alert = await driver.switchTo().alert()
            const actualErrorMessage = await alert.getText()
            await alert.accept()
            expect(actualErrorMessage).to.include('Please fill out Username and Password.');
        })
	})
   
	afterEach(async function () {
		await driver.sleep(3000)
	})

	after(async function () {
		await driver.close()
	})
})