let millis = 0

function timeFunction(fn) {
	//time function
	let start = window.performance.now()
	fn()
	let end = window.performance.now()

	//format and return time in ms
	millis = end - start
	millis = Math.floor(millis*100) / 100.
	return millis
}
