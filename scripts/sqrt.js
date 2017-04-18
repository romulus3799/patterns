const ACCURACY = 10
let sqrtPos = 1

function sqrt(x) {
	//call recursive helper
	return sr(x, x, 0, true)
}

//recursive helper
/*
This function uses recursion to guess and check a number's sqrt

How it works:
1	Guess a number, check if it's the root (to x decimal places)
2	If so, return it
3	If not, decrement the number until it's too low
4	Call function with new low number, use smaller increments,
and increment until the number is too HIGH
5	Keep calling function, each time with more accurate increments and
keep switching whether or not to increment or decrement number
*/
function sr(guess, base, deg, hi) {
	//return number if correct
	if(round(guess*guess) === round(base)) return round(guess)
	//increase or decrease number until it's too high or low
	if(hi) {
		while(round(guess*guess) > round(base)) guess -= 1./Math.pow(10,deg)
	}
	else {
		while(guess*guess < base) guess += 1./Math.pow(10,deg)
	}
	//return function with higher degree of accuracy, switch instruction to increment
	return sr(guess, base, deg+1, !hi)
}

function round(num) {
	//round float to decimal place ACCURACY
	let degree = Math.pow(10,ACCURACY)
	return Math.floor(num*degree+.5)/degree
}

function execSqrt() {
	function executeSqrt() {
		//get and display output
		let base = sqrtPos,
			root = sqrt(sqrtPos)
		let output = '&radic;' + base + ' = ' + root

		$('#sqrt-pos').html('Current Position : ' + base)
		$('#sqrt-out').html(output)

		sqrtPos++
	}

	//time and execute functions
	let millis = timeFunction(executeSqrt)

	//display time
	let time = millis < 1 ?
	'Completed in < 1 ms' :
	'Completed in ' + millis + ' ms'

	$('#sqrt-time').html(time)
}

function execCustomSqrt() {
	function executeSqrt() {
		let output =  '&radic;' + $('#num-sqrt').val() + ' = ' + sqrt($('#num-sqrt').val())
		$('#csqrt-out').html(output)
	}

	//time and execute function
	let millis = timeFunction(executeSqrt)

	//display time
	let time = millis < 1 ?
	'Completed in < 1 ms' :
	'Completed in ' + millis + ' ms'

	$('#csqrt-time').html(time)
}
