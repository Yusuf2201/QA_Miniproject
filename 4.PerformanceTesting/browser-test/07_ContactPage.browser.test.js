import { sleep } from 'k6'

export default async function (page) {
	await page.goto('https://bakpiaku.com/contact/')
	page.waitForSelector('#nf-form-title-1 ')
	page.screenshot({ path: 'screenshots/07_ContactPage.png' })
	sleep(3)
}