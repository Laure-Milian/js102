
var arr = process.argv.slice(2);

var result = Number(arr[0]);

for (var i = 1; i < arr.length; i++) {
	result -= Number(arr[i]);
}

console.log(result);

