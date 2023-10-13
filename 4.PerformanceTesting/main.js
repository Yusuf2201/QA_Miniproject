import { browser } from 'k6/experimental/browser'

import thresholds from './konfigurasi/thresholds.js'
import smoke_test from './konfigurasi/smoke_test.js'
import average_load_test from './konfigurasi/average_load_test.js'
import breakpoint_test from './konfigurasi/breakpoint_test.js'
import soak_test from './konfigurasi/soak_test.js'
import spike_test from './konfigurasi/spike_test.js'
import stress_test from './konfigurasi/stress_test.js'

import Home_browser from './browser-test/01_HomePage.browser.test.js'
import Product_browser from './browser-test/02_ProductPage.browser.test.js'
import Blog_browser from './browser-test/03_BlogPage.browser.test.js'
import Story_browser from './browser-test/04_StoryPage.browser.test.js'
import Location_browser from './browser-test/05_LocationPage.browser.test.js'
import FAQ_browser from './browser-test/06_FAQPage.browser.test.js'
import Contact_browser from './browser-test/07_ContactPage.browser.test.js'

import Home_protocol from './protocol-test/01_HomePage.protocol.test.js'
import Product_protocol from './protocol-test/02_ProductPage.protocol.test.js'
import Blog_protocol from './protocol-test/03_BlogPage.protocol.test.js'
import Story_protocol from './protocol-test/04_StoryPage.protocol.test.js'
import Location_protocol from './protocol-test/05_LocationPage.protocol.test.js'
import FAQ_protocol from './protocol-test/06_FAQPage.protocol.test.js'
import Contact_protocol from './protocol-test/07_ContactPage.protocol.test.js'

const scenarioList = {
	smoke: smoke_test,
	average: average_load_test,
    breakpoint : breakpoint_test,
    soak : soak_test,
    spike : spike_test,
    stress : stress_test
}


export const options = {
	thresholds,
	scenarios: {
		protocolBased: scenarioList[__ENV.SCENARIO] || smoke_test,
		browserBased: {
			exec: 'browserBasedScript',
			executor: 'shared-iterations',
			options: {
				browser: {
					type: 'chromium'
				}
			}
		}
	}
}

		export async function browserBasedScript () {
			const page = browser.newPage()

			try {
				await Home_browser(page)
				await Product_browser(page)
				await Blog_browser(page)
				await Story_browser(page)
				await Location_browser(page)
				await FAQ_browser(page)
				await Contact_browser(page)
			} finally {
				page.close()
			}
		}

		export function protocolBasedScript() {
				Home_protocol()
				Product_protocol()
				Blog_protocol()
				Story_protocol()
				Location_protocol()
				FAQ_protocol()
				Contact_protocol()
		}
