import { check, group } from 'k6'
import http from 'k6/http'
import { Trend } from 'k6/metrics'
import { getcheck } from "../utils/check.js"
import { headers } from '../konfigurasi/headers.js'

const pageDuration = new Trend('page_login_duration', true)

export default function () {
	group('03_Cart_page', function () {
		const responses = http.batch([
                  
		])

		for (const res of responses) {
			pageDuration.add(res.timings.duration)

                  getcheck(res);
           
		}
	})
}

