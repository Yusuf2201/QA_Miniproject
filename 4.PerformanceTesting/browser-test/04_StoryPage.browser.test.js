import { sleep } from 'k6'

export default async function (page) {
	await page.goto('https://bakpiaku.com/story/')
	page.waitForSelector('#section-story')
	page.screenshot({ path: 'screenshots/04_StoryPage.png' })
	sleep(3)
}