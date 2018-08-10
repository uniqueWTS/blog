/*创建一个函数,用以解析查询字符串,然后返
回包含所有参数的一个对象*/

// var qs = "?q=javascript&num=10";

function getQueryString() {

	var qs = location.search.length > 0 ? location.search.substring(1) : "";

	var items = qs.length > 0 ? qs.split("&") : []; 

	var obj = {};

	for(var i = 0; i<items.length; i++) {
		var arr = items[i].split("=");
		var p = decodeURIComponent(arr[0]);
		var v = decodeURIComponent(arr[1]);
		if (p.length > 0) {
			obj[p] = v;
		}
	} // END for

	return obj;
}

/*Location: assign replace reload([true])*/