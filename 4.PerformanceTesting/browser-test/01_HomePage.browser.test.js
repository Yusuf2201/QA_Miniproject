import { sleep } from 'k6'

export default async function (page) {
	await page.goto('https://bakpiaku.com/product/bakpiaku-kumbu-hitam/')
	page.waitForSelector('#product-808')
	page.screenshot({ path: 'screenshots/01_HomePage.png' })
	sleep(3)
}