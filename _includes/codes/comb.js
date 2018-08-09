function SuperType() {
	this.colors = ['red'];
}


SuperType.prototype.sayColor = function() {
	console.log(this.colors);
};

function SubType () {
	SuperType.call(this); //借用构造函数, 再次调用SuperType
}
//原型链, 第一次调用 SuperType
SubType.prototype = new SuperType();

var ins = new SubType();
ins.colors.push('green');
ins.sayColor(); //red,green

var ins2 = new SubType();
ins2.sayColor();//red