import { sleep } from 'k6'

export default async function (page) {
	await page.goto('https://bakpiaku.com/location/')
	page.waitForSelector('#section-store')
	page.screenshot({ path: 'screenshots/05_LocationPage.png' })
	sleep(3)
}