
var arr = process.argv.slice(2);

function add(tableau) {
	var result = 0;
	for (var i = 0; i < tableau.length; i++) {
		result += Number(tableau[i]);
	}
	console.log(result);
};

add(arr);

add([10, 8, 15]);