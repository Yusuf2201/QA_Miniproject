import { sleep } from 'k6'

export default async function (page) {
	await page.goto('https://bakpiaku.com/product/')
	page.waitForSelector('#section-store')
	page.screenshot({ path: 'screenshots/02_ProductPage.png' })
	sleep(3)
}
