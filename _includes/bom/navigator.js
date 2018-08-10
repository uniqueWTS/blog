/*check plugins except IE browsers
*/
function hasPlugin(name) {
	// if (typeof name != "string") return false;
	name = name.toLowerCase();
	var len = navigator.plugins.length;
	for(var i=0; i<len; i++){
		if (navigator.plugins[i].name.toLowerCase().indexOf(name) != -1) {
			return true;
		}
	}//endfor
	return false;
}

/*check plugins only works for IE browsers
*/

function hasIEPlugin(name) {
	name = name.toLowerCase();
	try{
		new ActiveXObject(name);
		return true;
	}catch(ex){
		return false;
	}
}

/*Better check plugin once for all browsers*/
function hasXPlugin(name) {
	var result = hasPlugin(name);
	if (!result) {//plugin_name may be different
		result = hasIEPlugin(name.toString()+"."+name.toString()); 
	}
	return result;
}