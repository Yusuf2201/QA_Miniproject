import { check, group } from 'k6'
import http from 'k6/http'
import { Trend } from 'k6/metrics'
import { getcheck } from "../utils/check.js"
import { headers } from '../konfigurasi/headers.js'

const pageDuration = new Trend('page_faq_duration', true)

export default function () {
	group('06_FAQPage', function () {
		const responses = http.batch([
                  ['GET','https://bakpiaku.com/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js',headers],
                  ['GET','https://bakpiaku.com/faq/',headers],
                  ['GET','https://bakpiaku.com/wp-content/plugins/mailoptin/vendor/mailoptin/core/src/assets/js/mailoptin.min.js?ver=1.2.12.2',headers],
                  ['GET','https://bakpiaku.com/wp-content/plugins/woocommerce/assets/css/woocommerce-layout.css?ver=3.5.10',headers],
                  ['GET','https://bakpiaku.com/wp-content/plugins/woocommerce/assets/js/frontend/add-to-cart.min.js?ver=3.5.10',headers],
                  ['GET','https://bakpiaku.com/wp-content/plugins/woocommerce/assets/js/frontend/cart-fragments.min.js?ver=3.5.10',headers],
                  ['GET','https://bakpiaku.com/wp-content/plugins/woocommerce/assets/js/frontend/woocommerce.min.js?ver=3.5.10',headers],
                  ['GET','https://bakpiaku.com/wp-content/plugins/woocommerce/assets/js/jquery-blockui/jquery.blockUI.min.js?ver=2.70',headers],
                  ['GET','https://bakpiaku.com/wp-content/plugins/woocommerce/assets/js/js-cookie/js.cookie.min.js?ver=2.1.4',headers],
                  ['GET','https://bakpiaku.com/wp-content/plugins/wp-smushit/app/assets/js/smush-lazy-load.min.js?ver=3.7.1',headers],
                  ['GET','https://bakpiaku.com/wp-content/themes/sirius-lite/assets/css/bootstrap.min.css?ver=6.1.1',headers],
                  ['GET','https://bakpiaku.com/wp-content/themes/sirius-lite/assets/css/font-awesome.min.css?ver=6.1.1',headers],
                  ['GET','https://bakpiaku.com/wp-content/themes/sirius-lite/assets/fonts/fontawesome-webfont.woff2?v=4.7.0',headers],
                  ['GET','https://bakpiaku.com/wp-content/themes/sirius-lite/assets/js/bootstrap-select.min.js?ver=6.1.1',headers],
                  ['GET','https://bakpiaku.com/wp-content/themes/sirius-lite/assets/js/bootstrap.min.js?ver=6.1.1',headers],
                  ['GET','https://bakpiaku.com/wp-content/themes/sirius-lite/assets/js/respond.min.js?ver=1.3.0',headers],
                  ['GET','https://bakpiaku.com/wp-content/themes/sirius-lite/assets/js/sirius-anim.js?ver=6.1.1',headers],
                  ['GET','https://bakpiaku.com/wp-content/themes/sirius-lite/assets/js/wow.min.js?ver=6.1.1',headers],
                  ['GET','https://bakpiaku.com/wp-content/themes/sirius-lite/assets/plugins/slick/fonts/slick.woff',headers],
                  ['GET','https://bakpiaku.com/wp-content/themes/sirius-lite/assets/plugins/slick/slick.min.js?ver=6.1.1',headers],
                  ['GET','https://bakpiaku.com/wp-content/uploads/2020/09/cropped-bkulogomini-2.png',headers],
                  ['GET','https://bakpiaku.com/wp-content/uploads/2020/10/cropped-bkufavicon-32x32.png',headers],
                  ['GET','https://bakpiaku.com/wp-content/uploads/2020/10/cropped-bkufavicon-32x32.png',headers],
                  ['GET','https://bakpiaku.com/wp-content/uploads/2022/11/BKU-Banner-Tamansari-jpeg.webp',headers],
                  ['GET','https://bakpiaku.com/wp-content/uploads/hummingbird-assets/00a7c1a11eb13e486d11368004ec7236.js',headers],
                  ['GET','https://bakpiaku.com/wp-content/uploads/hummingbird-assets/08f30f01c5c2d1585f2d2384b64249ff.js',headers],
                  ['GET','https://bakpiaku.com/wp-content/uploads/hummingbird-assets/3dd1796229c072bb53b3347caa8ffbe5.css',headers],
                  ['GET','https://bakpiaku.com/wp-content/uploads/hummingbird-assets/43bb1559c67fdc644f6434a55b626696.js',headers],
                  ['GET','https://bakpiaku.com/wp-content/uploads/hummingbird-assets/78a7af231ac5e3b7f68f7a3f23b862c4.css',headers],
                  ['GET','https://bakpiaku.com/wp-content/uploads/hummingbird-assets/85fbd5cdd7da3d6cdf091a41c834c796.css',headers],
                  ['GET','https://bakpiaku.com/wp-content/uploads/hummingbird-assets/9e4640c5c55c65b7ed018c3736e07803.js',headers],
                  ['GET','https://bakpiaku.com/wp-content/uploads/hummingbird-assets/ce394186e4b95f054bbe191cc05ee0ad.css',headers],
                  ['GET','https://bakpiaku.com/wp-content/uploads/hummingbird-assets/d17dddea2e8393503947eac3444b94e3.css',headers],
                  ['GET','https://bakpiaku.com/wp-content/uploads/hummingbird-assets/dd9fafc319cedd3bce4b191e73e2ab6b.css',headers],
                  ['GET','https://bakpiaku.com/wp-includes/css/classic-themes.min.css?ver=1',headers],
                  ['GET','https://bakpiaku.com/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.3.2',headers],
                  ['GET','https://bakpiaku.com/wp-includes/js/jquery/jquery.min.js?ver=3.6.1',headers],
                  ['GET','https://bakpiaku.com/wp-includes/js/wp-emoji-release.min.js?ver=6.1.1',headers],
		])

		for (const res of responses) {
			pageDuration.add(res.timings.duration)

                  getcheck(res);
           
		}
	})
}

