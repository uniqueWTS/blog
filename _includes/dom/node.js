/* Node接口12种结点类型nodeType
(IE可能没有这些属性, 数值nodeType)
IE8- 在DOM的对象通常实现为COM对象,不能像JS对象那样处理.

 Node.ELEMENT_NODE (1);
 Node.ATTRIBUTE_NODE (2);
 Node.TEXT_NODE (3);
 Node.CDATA_SECTION_NODE (4);
 Node.ENTITY_REFERENCE_NODE (5);
 Node.ENTITY_NODE (6);
 Node.PROCESSING_INSTRUCTION_NODE (7);
 Node.COMMENT_NODE (8);
 Node.DOCUMENT_NODE (9);
 Node.DOCUMENT_TYPE_NODE (10);
 Node.DOCUMENT_FRAGMENT_NODE (11);
 Node.NOTATION_NODE (12)
 */

// var html = document.getElementsByTagName("html")[0];
// console.log(html);

// 结点类型和结点值
// var value;
// if (html.nodeType == 1) {
// 	value = html.nodeName; //HTML
// }

// NodeList to array
function convertToArray(nodes) {
	var array = null;
	try	{
		array = Array.prototype.slice.call(nodes,0);
	}catch(ex){
		array = new Array();
		for(var i =0, len = nodes.length; i < len; i++) {
			array.push(nodes[i]);
		}
	}
	return array;
}

/*操作结点
appendChild 新增末尾子元素 parentNode.appendChild(newNode)
insertBefore 在某结点之前插入新结点  parentNode.insertBefore(newNode, someNode)
replaceChild 代替结点 parentNode.replaceChild(newNode)
removeChild 删除结点 parentNode.remove(someNode)
*/

// 剪切文档结点, 粘贴成为新元素子元素末尾
function cutAndPasteNodeByID(nodeId, parentNodeId){
	/*获取新结点*/
	var newNode = document.getElementById(nodeId);
	/*获取父母结点*/
	var parentNode = document.getElementById(parentNodeId);
	/*插入新结点*/
	parentNode.appendChild(newNode);
}

/* 克隆文档结点, 粘贴成为新元素子元素末尾
克隆兼容性有问题. IE会克隆事件处理程序, 其它浏览器不会.
*/
function copyAndPasteNodeByID(nodeId, parentNodeId){
	/*获取新结点*/
	var newNode = document.getElementById(nodeId);
	newNode = newNode.cloneNode(true);
	/*获取父母结点*/
	var parentNode = document.getElementById(parentNodeId);
	/*插入新结点*/
	parentNode.appendChild(newNode);
}

