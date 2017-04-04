let fibber = fib()
function* fib() {
	let fibCount = 0
	let x = 0
	let y = 1

	while(true) {
		fibCount++

		yield fibCount
		yield y
		console.log('x=' + x + ', y=' + y + ' ' + Math.random())
		let temp = x
		x = y
		y += temp
	}
}

function execCustomFib() {
	function executeCustomFib() {
		let customFib
		let customCount

		let cFibber = fib()
		//advance generator until position is input-1
		for (var i = 0; i < $('#num-fib').val()-1; i++) {
			cFibber.next()
			cFibber.next()
		}
		//record gen value of input
		customCount = cFibber.next().value
		customFib = cFibber.next().value

		//get output
		let output = 'Fib<sub>' + customCount + '</sub> = ' + customFib
		//display output, reset count
		$('#cfib-out').html(output)
	}

	let millis = timeFunction(executeCustomFib)
	//if operation completed in <1 ms, write it
	let time = millis < 1 ?
	'Completed in < 1 ms' :
	'Completed in ' + millis + ' ms'

	$('#cfib-time').html(time)
}

function execFib() {
	function executeFib() {
		//get output
		let fPos = fibber.next().value
		let fNum = fibber.next().value
		let output = 'Fib<sub>' + fPos + '</sub> = ' + fNum

		//display output
		$('#fib-pos').html('Current Position : ' + fPos)
		$('#fib-out').html(output)
	}

	//time execution
	let millis = timeFunction(executeFib)

	//if operation completed in <1 ms, write it
	let time = millis < 1 ?
	'Completed in < 1 ms' :
	'Completed in ' + millis + ' ms'

	//display time
	$('#fib-time').html(time)
}
