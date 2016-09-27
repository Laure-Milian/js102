console.log("hello world");

var pair_impair = function(number, skip) {
	for (var i = number; i <= 100; i = i + skip) {
		if (i % 2 == 0) {
			console.log(i, "pair");
		}
		else {
			console.log(i, "impair");
		}
	};
};

pair_impair(50, 3);

