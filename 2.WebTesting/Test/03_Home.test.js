const { WebDriver, until } = require('selenium-webdriver')
const { expect } = require('chai')
const SetupDriver = require('../Utils/SetupDriver')
const  HomePage= require('../PageObjects/HomePage')

describe('Test Homepage', function () {
	/** @type {WebDriver} */ let driver
	/** @type {HomePage} */ let homePage
  
	before(async function () {
		driver = await SetupDriver()
		homePage = new HomePage(driver)
      
	})
    describe("Mengecek Tombol yang ada di HomePage", () => {
        it('Home_001_mengecek tombol selanjutnya (>)', async function () {
            await homePage.openPage()
            await driver.sleep(1000)
            await homePage.SecondNext()
            })
         it('Home_002_mengecek tombol sebelumnya (<previous>)', async function () {
            await homePage.SecondPrev()
            })
        it('Home_003_mengecek tombol sebelumnya (previous)', async function () {
            await homePage.scroll()
            await driver.sleep(1000)
            await homePage.Next()
            await driver.sleep(6000)
            const hasil= await homePage.ResultSort()
            expect(hasil).to.be.include('Apple monitor 24')
            })
        it('Home_004_mengecek tombol selanjutnya (next)', async function () {
            await homePage.scroll()
            await driver.sleep(2000)
            await homePage.Previous()
            await driver.sleep(6000)
            const hasil= await homePage.ResultSort()
            expect(hasil).to.be.include('Nokia lumia 1520')
            })
        it('Home_005_sortir berdasarkan kategori monitor', async function () {
            await homePage.scroll()
            await driver.sleep(2000)
            await homePage.SortMonitor()
            await driver.sleep(6000)
            const hasil= await homePage.ResultSort()
            expect(hasil).to.be.include('Apple monitor')
            })
        it('Home_006_sortir berdasarkan kategori Laptop', async function () {
            await homePage.scroll()
            await homePage.SortLaptop()
            await driver.sleep(6000)
            const hasil= await homePage.ResultSort()
            expect(hasil).to.be.include('Sony vaio i5')
            })
        
        it('Home_007_sortir berdasarkan kategori Phone', async function () {
            await homePage.SortPhone()
            await driver.sleep(6000)
            const hasil= await homePage.ResultSort()
            expect(hasil).to.be.include('Samsung galaxy s6')
            })
    })

    describe("Mengecek About Demoblaze di HomePage", () => {
        it('Home_008_ Masuk ke About demoblaze', async function () {
            await homePage.toAboutUs()
            await driver.sleep(5000)
            const hasil= await homePage.succesToAboutUs()
            expect(hasil).to.be.include('Close')
            })
        it('Home_009_Memutar video About Demoblaze', async function () {
            await homePage.playAboutUs()
            await driver.sleep(2000)
            // const hasil= await homePage.succesPlayAboutUs()
            // expect(hasil).to.be.include('Pause')
            })      
            
// belum bisa
        //  it.only('Home_010_Pause Video About Demoblaze', async function () {
        //     await homePage.playAboutUs()
        //     await homePage.pauseAboutUs()
        //     await driver.sleep(5000)
        //     const hasil= await homePage.succesPlayAboutUs()
        //     expect(hasil).to.be.include('Play')
        //     })   
        it('Home_011_Keluar About Demoblaze', async function () {
            await homePage.closeAboutUs()
            await driver.sleep(2000)
            await driver.sleep(5000)
            const check = await homePage.category()
            expect(check).to.be.equal('CATEGORIES')
            })   
        }) 
    describe("Mengecek Contact Demoblaze di HomePage", () => {
        it('Home_012_ Masuk ke contact demoblaze', async function () {
            await homePage.openPage()
            await driver.sleep(5000)
            await homePage.toContactUs()
            await driver.sleep(5000)
            const hasil= await homePage.succesContactUs()
            expect(hasil).to.be.include('New message')
            })
        it('Home_013_ mengisi form contact demoblaze', async function () {
            await homePage.massageProcess('jos@gmail.com', 'jose', 'ayo semangat')
            await driver.sleep(3000)
            const alert = await driver.switchTo().alert()
            const actualErrorMessage = await alert.getText()
            await alert.accept()
            expect(actualErrorMessage).to.include('Thanks for the message!!');
            })  
        })   

    describe("Mengecek About Demoblaze di HomePage", () => {
      // masi salah expectnya
        it('Home_014_ Memilih Product', async function () {
            await homePage.openPage()
            await driver.sleep(5000)
            await homePage.toProduct()
            await driver.sleep(2000)
            const hasil= await homePage.SuccesGetProduct()
            console.log(hasil)
            expect(hasil).to.be.include('Add to cart')
        })
        it('Home_015_ memasukkan Product ke Keranjang', async function () {
            
            await homePage.addToCart2()
            await driver.wait(until.alertIsPresent(), 5000);
		    const alert = await driver.switchTo().alert();
		    const alertText = await alert.getText();
		    await alert.accept();
            expect(alertText).to.include('Product added');
        })
    })
        

   // kurang previus dan satunya, geser bar, about us, contact us,
	afterEach(async function () {
		await driver.sleep(4000)
	})

	after(async function () {
		await driver.close()
	})
})