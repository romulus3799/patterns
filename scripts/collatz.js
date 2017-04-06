function* hailstone(startingNum) {

	let n = startingNum,
		kickout = false

	while(!kickout) {
		if (n%2 === 0) {
			n /= 2
		} else {
			n = 3*n + 1
		}

		yield n
		if (n === 1) {
			kickout = true
		}
	}
}
function execHail() {
	let outSequence = []
	function executeHail() {
		let iters = 0
		for(let hail = hailstone($('#collatz-in').val()), h; !(h = hail.next()).done;) {
		    outSequence.push(h.value)
			iters++
		}

		console.log(outSequence)
		let outStr = ''
		for (n of outSequence) {
			outStr += String(n + ' ')
		}

		$('#collatz-iters').html('Iterations : ' + iters)
		$('#collatz-out').html(outStr)
	}

	let millis = timeFunction(executeHail)
	//if operation completed in <1 ms, write it
	let time = millis < 1 ?
	'Completed in < 1 ms' :
	'Completed in ' + millis + ' ms'

	$('#collatz-time').html(time)
}
