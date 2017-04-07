let triber = tri()
//generate triangle numbers
function* tri() {
	let x = 0
	let p = 1
	while (true) {
		yield p
		yield x = x + p++
	}
}
function execCustomTri() {
	function executeCustomTri() {
		let customTri
		let customCount

		let cTriber = tri()
		//advance generator until position is input-1
		for (var i = 0; i < $('#num-tri').val()-1; i++) {
			cTriber.next()
			cTriber.next()
		}
		//record gen value of input
		customCount = cTriber.next().value
		customTri = cTriber.next().value

		//get output
		let output = 'Tri<sub>' + customCount + '</sub> = ' + customTri
		//display output, reset count
		$('#ctri-out').html(output)
	}

	let millis = timeFunction(executeCustomTri)
	//if operation completed in <1 ms, write it
	let time = millis < 1 ?
	'Completed in < 1 ms' :
	'Completed in ' + millis + ' ms'

	$('#ctri-time').html(time)
}

function execTri() {
	function executeTri() {
		//get output
		let tPos = triber.next().value
		let tNum = triber.next().value
		let output = 'Tri<sub>' + tPos + '</sub> = ' + tNum

		//display output
		$('#tri-pos').html('Current Position : ' + tPos)
		$('#tri-out').html(output)
	}

	//time execution
	let millis = timeFunction(executeTri)

	//if operation completed in <1 ms, write it
	let time = millis < 1 ?
	'Completed in < 1 ms' :
	'Completed in ' + millis + ' ms'

	//display time
	$('#tri-time').html(time)
}
