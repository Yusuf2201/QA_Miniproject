import { check, group } from 'k6'
import http from 'k6/http'
import { Trend } from 'k6/metrics'
import { getcheck } from "../utils/check.js"
import { headers } from '../konfigurasi/headers.js'


const pageDuration = new Trend('page_home_duration', true)

export default function () {
	group('01_HomePage', function () {
		const responses = http.batch([
            
            ['GET','https://bakpiaku.com/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js',headers],
            ['GET','https://bakpiaku.com/product/bakpiaku-kumbu-hitam/',headers],
            ['GET','https://bakpiaku.com/wp-content/plugins/mailoptin/vendor/mailoptin/core/src/assets/js/mailoptin.min.js?ver=1.2.12.2',headers],
            ['GET','https://bakpiaku.com/wp-content/plugins/woocommerce/assets/js/flexslider/jquery.flexslider.min.js?ver=2.7.2',headers],
            ['GET','https://bakpiaku.com/wp-content/plugins/woocommerce/assets/js/frontend/add-to-cart-variation.min.js?ver=3.5.10',headers],
            ['GET','https://bakpiaku.com/wp-content/plugins/woocommerce/assets/js/frontend/add-to-cart.min.js?ver=3.5.10',headers],
            ['GET','https://bakpiaku.com/wp-content/plugins/woocommerce/assets/js/frontend/cart-fragments.min.js?ver=3.5.10',headers],
            ['GET','https://bakpiaku.com/wp-content/plugins/woocommerce/assets/js/frontend/single-product.min.js?ver=3.5.10',headers],
            ['GET','https://bakpiaku.com/wp-content/plugins/woocommerce/assets/js/frontend/woocommerce.min.js?ver=3.5.10',headers],
            ['GET','https://bakpiaku.com/wp-content/plugins/woocommerce/assets/js/jquery-blockui/jquery.blockUI.min.js?ver=2.70',headers],
            ['GET','https://bakpiaku.com/wp-content/plugins/woocommerce/assets/js/js-cookie/js.cookie.min.js?ver=2.1.4',headers],
            ['GET','https://bakpiaku.com/wp-content/plugins/woocommerce/assets/js/photoswipe/photoswipe-ui-default.min.js?ver=4.1.1',headers],
            ['GET','https://bakpiaku.com/wp-content/plugins/woocommerce/assets/js/photoswipe/photoswipe.min.js?ver=4.1.1',headers],
            ['GET','https://bakpiaku.com/wp-content/plugins/woocommerce/assets/js/zoom/jquery.zoom.min.js?ver=1.7.21',headers],
            ['GET','https://bakpiaku.com/wp-content/plugins/wp-smushit/app/assets/js/smush-lazy-load.min.js?ver=3.7.1',headers],
            ['GET','https://bakpiaku.com/wp-content/themes/sirius-lite/assets/fonts/fontawesome-webfont.woff2?v=4.7.0',headers],
            ['GET','https://bakpiaku.com/wp-content/themes/sirius-lite/assets/js/bootstrap-select.min.js?ver=6.1.1',headers],
            ['GET','https://bakpiaku.com/wp-content/themes/sirius-lite/assets/js/bootstrap.min.js?ver=6.1.1',headers],
            ['GET','https://bakpiaku.com/wp-content/themes/sirius-lite/assets/js/respond.min.js?ver=1.3.0',headers],
            ['GET','https://bakpiaku.com/wp-content/themes/sirius-lite/assets/js/sirius-anim.js?ver=6.1.1',headers],
            ['GET','https://bakpiaku.com/wp-content/themes/sirius-lite/assets/js/wow.min.js?ver=6.1.1',headers],
            ['GET','https://bakpiaku.com/wp-content/themes/sirius-lite/assets/plugins/slick/slick.min.js?ver=6.1.1',headers],
            ['GET','https://bakpiaku.com/wp-content/uploads/2020/09/PHOTO-2022-11-30-12-14-48-2-jpg.webp',headers],
            ['GET','https://bakpiaku.com/wp-content/uploads/2020/09/cropped-bkulogomini-2.png',headers],
            ['GET','https://bakpiaku.com/wp-content/uploads/2020/10/cropped-bkufavicon-32x32.png',headers],
            ['GET','https://bakpiaku.com/wp-content/uploads/2020/10/cropped-bkufavicon-32x32.png',headers],
            ['GET','https://bakpiaku.com/wp-content/uploads/2020/12/shopee_logo.png',headers],
            ['GET','https://bakpiaku.com/wp-content/uploads/2020/12/tokopedia_logo.png',headers],
            ['GET','https://bakpiaku.com/wp-content/uploads/2020/12/whatsapp_logo.png',headers],
            ['GET','https://bakpiaku.com/wp-content/uploads/2022/11/BKU-Banner-Tamansari-jpeg.webp',headers],
            ['GET','https://bakpiaku.com/wp-content/uploads/hummingbird-assets/00a7c1a11eb13e486d11368004ec7236.js',headers],
            ['GET','https://bakpiaku.com/wp-content/uploads/hummingbird-assets/08f30f01c5c2d1585f2d2384b64249ff.js',headers],
            ['GET','https://bakpiaku.com/wp-content/uploads/hummingbird-assets/43bb1559c67fdc644f6434a55b626696.js',headers],
            ['GET','https://bakpiaku.com/wp-content/uploads/hummingbird-assets/9e4640c5c55c65b7ed018c3736e07803.js',headers],
            ['GET','https://bakpiaku.com/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.3.2',headers],
            ['GET','https://bakpiaku.com/wp-includes/js/jquery/jquery.min.js?ver=3.6.1',headers],
            ['GET','https://bakpiaku.com/wp-includes/js/underscore.min.js?ver=1.13.4',headers],
            ['GET','https://bakpiaku.com/wp-includes/js/wp-emoji-release.min.js?ver=6.1.1',headers],
            ['GET','https://bakpiaku.com/wp-includes/js/wp-util.min.js?ver=6.1.1',headers],
		])

		for (const res of responses) {
			pageDuration.add(res.timings.duration)
            getcheck(res);
		}
	})
}

