
var arr = process.argv.slice(2);

var result = arr[0];

for (var i = 1; i < arr.length; i++) {
	result = result * Number(arr[i]);
}

console.log(result);