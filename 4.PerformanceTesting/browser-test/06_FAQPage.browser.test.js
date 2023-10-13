import { sleep } from 'k6'

export default async function (page) {
	await page.goto('https://bakpiaku.com/faq/')
	page.waitForSelector('#page-36')
	page.screenshot({ path: 'screenshots/06_FAQPage.png'})
	sleep(3)
}