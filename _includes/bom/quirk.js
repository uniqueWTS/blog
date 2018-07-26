/*怪癖检测*/

/*
Chrome, FF: false
 */
var hasEnumQuirk = function () {

	var o = {toString: function (){}};

	for(var prop in o) {
		if (prop == "toString") {
			return false;
		}
	}
	return true;
};


/*
version < Safari 3 : true
 */
var hasEnumShadowQuirk = function () {

	var o = {toString: function (){}};

	var count = 0;
	for(var prop in o) {
		if (prop == "toString") {
			count++;
		}
	}
	return count>1;
};
