function inheritProto(sub, sup) {
	var isBothFunction = (typeof sub == "function") 
	 && (typeof sup == "function");
	if (isBothFunction) {
		var prototype = Object(sup.prototype);
		prototype.constructor = sub;
		sub.prototype = prototype;
	}
}

function SupType(name) {
	this.colors = ['red'];
	this.name = name;
}

SupType.prototype.sayColor = function() {
	console.log(this.colors);
};

SupType.prototype.sayName = function() {
	console.log(this.name);
};

function SubType (name, age) {
	SupType.call(this, name); //借用构造函数
	this.age = age;	
}

inheritProto(SubType, SupType); //寄生式继承原型
SubType.prototype.sayAge = function(){
	console.log(this.age);
}

var ins = new SubType("WU", 28);
console.log(ins instanceof SubType);//true
console.log(ins instanceof SupType);//true
ins.sayName();//WU
ins.sayAge(); //28
ins.sayColor();//red