import { sleep } from 'k6'

export default async function (page) {
	await page.goto('https://bakpiaku.com/blog/')
	page.waitForSelector('#row-blog-wrapper > div:nth-child(1)')
	page.screenshot({ path: 'screenshots/03_BlogPage.png' })
	sleep(3)
}