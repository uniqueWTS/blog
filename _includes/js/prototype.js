function Proto(obj) {
	// 原型式继承...
	function F(){}
	F.prototype = obj;
	return new F();
}
