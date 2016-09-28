function pareil(a, b) {
	if (a === b) {
	console.log("Le type est le même ET la valeur est la même");
	}
	else if (typeof a === typeof b) {
		console.log("Le type est le même");
	}
	else {
		console.log("Le type est différent");
	}
}

pareil(2, 2);
pareil(2, "2");
pareil("blablaba", "bla");
pareil(true, false);
pareil(true, "bla");

