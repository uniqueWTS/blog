/*使用 typeof 操作符进行能力检测*/

 /*检测是否支持创建元素的方法
IE8-不支持
 */

function hasCreateElement() {
	return typeof document.createElement == "function";
}


/*测试是否存在某个方法: 函数, 对象*/
/*
typeof xhr.open == "unknown" ?
双逻辑非操作符?
 */
function isHostMethod(obj, property){
	var t = typeof obj[property];
	return t == "function" || t == "unknown" || 
	(!!( t == "object" && obj[property] ));
}

/*检测是否支持NetScape的插件
Chrome: true
FF: false
*/
var hasNSPlugins = !!(navigator.plugins && navigator.plugins.length);

/*检测是否支持DOM1
Chrome FF: true
*/
var hasDOM1 = !!(document.getElementById &&
 document.createElement && document.getElementsByTagName);