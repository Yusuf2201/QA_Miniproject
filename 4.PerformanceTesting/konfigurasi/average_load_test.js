const average_load_test = {
	executor: 'ramping-vus',
	exec: 'protocolBasedScript',
	// stages: [
	// 	{ duration: '5m', target: 100 },
	// 	{ duration: '30m', target: 100 },
	// 	{ duration: '5m', target: 0 },
	// ]
	// coba average aja yang bawah bukan spesifikasi dik6
	stages: [
		{ duration: '30s', target: 10 },
		{ duration: '1m', target: 15 },
		{ duration: '10s', target: 0 },
	]
}

export default average_load_test