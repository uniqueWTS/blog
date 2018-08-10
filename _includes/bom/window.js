var newWin = window.open("{{site.baseurl}}/public/html/grid","_blank","width=375,height=500,left=0,top=0");
/*
 Chrome Opera IE Safari: screenLeft
 Firefox: screenX screenY
 */
	var leftPos = (typeof window.screenLeft == "number" ? window.screenLeft : window.screenX);
	var topPos = (typeof window.screenTop == "number" ? window.screenTop : window.screenY);
	console.log("leftPos: "+leftPos+" topPos: "+topPos);

/* innerWidth innerHeight
FF,chrome: viewport  // IE 8- document.documentElement.clientWidth(clientHeight)
outerWidth outerHeight
FF, chrome: 浏览器窗口
 */

/*制作响应式过程*/
function displayResponsizePage(newWin) {
	setInterval(function () {
	newWin.resizeBy(1, 0);
	if(newWin.innerWidth >= window.innerWidth) {
		clearInterval(timer);
	}
}, 10);
}

displayResponsizePage(newWin);

console.log("inner: "+window.innerWidth+" "+window.innerHeight);
console.log("outer: "+window.outerWidth+" "+window.outerHeight);

/* 控制窗口的位置和大小, 可能被浏览器禁用
moveTo moveBy resizeTo resizeBy
 */
