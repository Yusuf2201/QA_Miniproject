import http from 'k6/http'

// module.exports = function () {}
export default function () {
	const res = http.get('https://bakpiaku.com/contact/')
	console.log(res.status)
	console.log(res.headers)
	console.log(res.timings)
}
