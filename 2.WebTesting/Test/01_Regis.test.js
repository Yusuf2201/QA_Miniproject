const { By, WebDriver } = require('selenium-webdriver')
const { expect } = require('chai')
const SetupDriver = require('../Utils/SetupDriver')
const RegisPage = require('../PageObjects/RegisPage')

describe('Test Registrasi', function () {
	/** @type {WebDriver} */ let driver
	/** @type {RegisPage} */ let regisPage

	before(async function () {
		driver = await SetupDriver()
		regisPage = new RegisPage(driver)
    
	})
    describe("Test Negatif Registrasi", () => {
        it('Res_001_mecoba login dengan username dan password yang pernah digunakan', async function () {
            await regisPage.openPage()
            await driver.sleep(1000)
            await regisPage.RegisProcess('yusuf2222', 'babyshark123K')
            await driver.sleep(1000)
            const alert = await driver.switchTo().alert()
            const actualErrorMessage = await alert.getText()
            await alert.accept()
            expect(actualErrorMessage).to.include('This user already exist.')
        })

        it('Res_002_mencoba login dengan username yang sudah digunakan dan password salah', async function () {
            await regisPage.cleardata()
            await regisPage.RegisProcess('yusuf2222', 'baby')
            await driver.sleep(1000)
            const alert = await driver.switchTo().alert()
            const actualErrorMessage = await alert.getText()
            await alert.accept()
            expect(actualErrorMessage).to.include('This user already exist.')
        })
        it('Res_003_mencoba login dengan username kosong dan password diisi', async function () {
            await regisPage.cleardata()
            await regisPage.RegisProcess('', 'baby')
            await driver.sleep(1000)
            const alert = await driver.switchTo().alert()
            const actualErrorMessage = await alert.getText()
            await alert.accept()
            expect(actualErrorMessage).to.include('Please fill out Username and Password.')
        })
        it('Res_004_coba login dengan username diisi dan password kosong', async function () {
            await regisPage.cleardata()
            await regisPage.RegisProcess('yaaaaaaaaaaaaaa', '')
            await driver.sleep(1000)
            const alert = await driver.switchTo().alert()
            const actualErrorMessage = await alert.getText()
            await alert.accept()
            expect(actualErrorMessage).to.include('Please fill out Username and Password.')
        })
    })
       describe("Test Positif Registrasi", () => {
                it('Res_005_mencoba login dengan  username dan password yang belum terdaftar', async function () {
                    await regisPage.cleardata()
                    await regisPage.RegisProcess('bisalolosyukaamiin', '1234')
                    await driver.sleep(1000)
                    const alert = await driver.switchTo().alert()
                    const actualErrorMessage = await alert.getText()
                    await alert.accept()
                    expect(actualErrorMessage).to.include('Sign up successful.');
                })
            })
	
   
	afterEach(async function () {
		await driver.sleep(2000)
	})

	after(async function () {
		await driver.close()
	})
})