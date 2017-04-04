let pter = pt()

function* pt() {
	let x = 0
	while (true) {
		x++
		yield x
		yield Math.pow(x,x)
	}
}

function execCustomPT() {
	function executeCustomPT() {
		let ptnum, count

		let cpter = pt()
		//advance generator until position is input-1
		for (var i = 0; i < $('#num-pt').val()-1; i++) {
			cpter.next()
			cpter.next()
		}
		//record gen value of input
		count = cpter.next().value
		ptnum = cpter.next().value

		//get output
		let output = count + '<sup>' + count + '</sup> = ' + ptnum
		//display output
		$('#cpt-out').html(output)
	}

	let millis = timeFunction(executeCustomPT)
	//if operation completed in <1 ms, write it
	let time = millis < 1 ?
	'Completed in < 1 ms' :
	'Completed in ' + millis + ' ms'

	$('#cpt-time').html(time)
}

function execPT() {
	function executePT() {
		//get output
		let ptPos = pter.next().value
		let ptNum = pter.next().value
		let output = ptPos + '<sup>' + ptPos + '</sup> = ' + ptNum

		//display output
		$('#pt-pos').html('Current Position : ' + ptPos)
		$('#pt-out').html(output)
	}

	//time execution
	let millis = timeFunction(executePT)

	//if operation completed in <1 ms, write it
	let time = millis < 1 ?
	'Completed in < 1 ms' :
	'Completed in ' + millis + ' ms'

	//display time
	$('#pt-time').html(time)
}
