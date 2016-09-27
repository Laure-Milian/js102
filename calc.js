
function add(a, b) {
	var result = a + b;
	return result;
}

function substract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	return a / b;
}

function calc() {
	var operation = process.argv[2];

	var a = parseInt(process.argv[3], 10);
	var b = parseInt(process.argv[4], 10);
	
	if (operation === "add") {
		console.log(add(a, b));
	} 

	else if (operation === "substract") {
		console.log(substract(a, b));
	} 

	else if (operation === "multiply") {
		console.log(multiply(a, b));
	}

	else if (operation === "divide") {
		console.log(divide(a,b));
	}

	else {
		console.log("opération inconnue");
	}

}


calc();

