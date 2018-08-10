/*
Action: Display Responsize Web Page View
Permission: Open window with JavaScript
For Browser: Chrome
*/



(function () {

	var location = window.location || document.location;

	function View(url) {
			return window.open(url, "_blank", "width=200,height=500,left=0,top=0");
	}

	/*begin 制作响应式过程*/
	function displayView(v) {
		var timer = setInterval(function () {
			v.resizeBy(1, 0);
			if(v.innerWidth >= window.innerWidth) {
				clearInterval(timer);
				if (v.opener == window) {
					v.opener = null; //
				}
			}
		}, 10);
	}
	/*end 制作响应式过程*/
 var v = new View("http://localhost:4000/blog/2018/08/01/OOD1.html");
 displayView(v);
})();

	