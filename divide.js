var arr = process.argv.slice(2);

var result = arr[0];

if (arr[1] == 0) {
	console.log("Nope");
}
else {
	result = result / Number(arr[1]);
	console.log(result);
}


