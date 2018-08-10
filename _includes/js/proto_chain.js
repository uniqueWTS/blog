function SuperType() {
	this.property = true;
}

SuperType.prototype.getSuperValue = function () {
	return this.property;
}

function SubType() {
}

SubType.prototype = new SuperType(); // 原型链
SubType.prototype.getSubValue = function () {
	return this.property;
}

var ins = new SubType();
// 继承 SuperType 的属性和方法
console.log(ins.getSuperValue()); //true
console.log(ins.getSubValue()); //true
// 覆盖 SuperType 的属性
ins.property = false;
console.log(ins.getSuperValue()); //false
console.log(ins.getSubValue()); //false