const spike_test = {
	exec: 'protocolBasedScript',
	executor: 'ramping-vus',
	stages: [
		{ duration: '2m', target: 2000 },
		{ duration: '1m', target: 0 },
	]
}

export default spike_test