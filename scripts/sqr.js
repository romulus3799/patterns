let squarer = sqr()

function* sqr() {
	let base = 0

	while(true) {
		yield base
		yield base*base
		base++
  	}
}

function sqrIn(a) {
	return a*a
}

function execSqr() {
	function executeSqr() {
		let base = squarer.next().value
		let square = squarer.next().value
		let output = base + '<sup>2</sup> = ' + square

		$('#sqr-pos').html('Current Position : ' + base)
		$('#sqr-out').html(output)
	}

	//time and execute function
	let millis = timeFunction(executeSqr)

	//display time
	let time = millis < 1 ?
	'Completed in < 1 ms' :
	'Completed in ' + millis + ' ms'

	$('#sqr-time').html(time)
}
function execCustomSqr() {
	function executeSqr() {
		let output =  $('#num-sqr').val() + '<sup>2</sup> = ' + sqrIn($('#num-sqr').val())
		$('#csqr-out').html(output)
	}

	//time and execute function
	let millis = timeFunction(executeSqr)

	//display time
	let time = millis < 1 ?
	'Completed in < 1 ms' :
	'Completed in ' + millis + ' ms'

	$('#csqr-time').html(time)
}
