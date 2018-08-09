function SupType() {
	this.colors = ['red'];
	this.sayColor = function () {
		console.log(this.colors);
	}
}

function SubType () {
	SupType.call(this); //借用构造函数
}


var ins = new SubType();
ins.colors.push('green');
ins.sayColor(); //red,green

var ins2 = new SubType();
ins2.sayColor();//red