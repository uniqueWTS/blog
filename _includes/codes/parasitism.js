function Para(original) {
	// 寄生式继承...
	var obj = new Proto(original);
	obj.showAll = function () {
		for(var property in original) {
			console.log(original[property]);
		}
	}
	return obj;
}

var ins = new Para(person_en);
ins.showAll();