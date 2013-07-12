var div = document.createElement("div");
  div.setAttribute("onclick","foldFrame()");
	div.setAttribute("style","font-family:Helvetica, Arial, sans-serif;");
	div.setAttribute("class","folder folder2");
	var txt = document.createTextNode("Reopen ");;
	var img = document.createElement("img");
	img.setAttribute("src","http://hiddencountryrest.com/Minimize.png");
	div.appendChild(txt);
	div.appendChild(img);
	var _body = document.getElementsByTagName("body")[0]
	_body.appendChild(div);
$(".folder").toggle();
inProgress = false;
function foldFrame() {
	if(inProgress == false)
	{
		inProgress = true
		$(".fsf-sidebar").slideToggle(600, function(){
				$(".folder").toggle();
				inProgress = false;
			});	
	}
}
function closeFrame() {
	$(".fsf-sidebar").remove()	
}
function processNodes(target, source, name) {
	scripts = source.getElementsByTagName(name)
	for(i=0;i<scripts.length;i++)
	{
		child = scripts[i]
		node = document.createElement(child.nodeName)
		if(child.attributes != null && child.attributes.length>0)
		{
			for(k=0;k<child.attributes.length;k++)
			{
				attr = child.attributes[k]
				node.setAttribute(attr.name, attr.value)
			}
		}
		if(child.childNodes.length>0)
		{
			process(node, child.childNodes)
		}
		target.appendChild(node)
	}
}
function process(node, children) {
	var len = children.length
	for(var j=0;j<len;j++)
	{
		var child = children[j]
		if(child.nodeType == 3)
		{
			node.appendChild(document.createTextNode(child.nodeValue))
		}
		else if(child.nodeType == 1)
		{
			var updatedChild = document.createElement(child.nodeName)
			if(child.attributes != null && child.attributes.length>0)
			{
				for(var k=0;k<child.attributes.length;k++)
				{
					var attr = child.attributes[k]
	  				updatedChild.setAttribute(attr.name, attr.value)
				}
			}
			if(child.childNodes.length>0)
			{
				updatedChild = process(updatedChild, child.childNodes)
			}
			node.appendChild(updatedChild)
		}
		else if(child.nodeType == 2)
		{
			var attribute = document.createAttribute(child.nodeName)
			attribute.value = child.nodeValue
			node.appendAttribute(attribute)
		}
	}	
	return node
}
$('head').append('<link rel="stylesheet" href="http://hiddencountryrest.com/hackathon.css" type="text/css" />');
$('.fsf-sidebar').remove()
_body = document.getElementsByTagName("body")[0]
_div = document.createElement("div")
_div.setAttribute("class","fsf-sidebar")
_body.appendChild(_div)
var xmlhttp;
if (window.XMLHttpRequest)
{// code for IE7+, Firefox, Chrome, Opera, Safari
	xmlhttp=new XMLHttpRequest();
}
else
{// code for IE6, IE5
	xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
}
xmlhttp.onreadystatechange=function()
{
	if(xmlhttp.readyState==4 && xmlhttp.status==200)
	{
		doc = xmlhttp.responseXML
		if(doc==null) //failed to load the responseXML. Manually parse the responseText
		{
			if(window.DOMParser)
			{
				parser = new DOMParser()
				doc = parser.parseFromString(xmlhttp.responseText, "text/xml")
			}
			else
			{
				doc=new ActiveXObject("Microsoft.XMLDOM");
		 	 	doc.async=false;
 			 	doc.loadXML(txt); 	
			}
		}
		var root = doc.documentElement
		var head = root.getElementsByTagName("head")[0]
		var body = root.getElementsByTagName("body")[0]
		var _head = document.getElementsByTagName("head")[0]
		processNodes(_head, head, "script")
		processNodes(_head, head, "link")
		processNodes(_head, head, "style")
		var children = body.childNodes
		for(var i=0;i<children.length;i++)
		{
			var child = children[i]
			if(child.nodeType == 3)
			{
				_div.appendChild(document.createTextNode(child.nodeValue))	
			}
			if(child.nodeType == 1)
			{
				var node = document.createElement(child.nodeName)
				if(child.attributes != null && child.attributes.length>0)
				{
					for(var k=0;k<child.attributes.length;k++)
					{
						attr = child.attributes[k]
						node.setAttribute(attr.name, attr.value)
					}
				}
				if(child.childNodes.length>0)
				{
					node = process(node, child.childNodes)
				}
				_div.appendChild(node)
			}
		}
		active = null
		$(".selection-element").click(function(){
			if(active!=null)
			{
				active.toggle();
				active.next().toggle(); 	
			}
			var text = "#cat-" + $(this).text()
			var node = $(text);
			node.next().toggle();
			node.toggle();
			active = node;
		});
               
         
        $("#fsf-url").val(window.location);        
        
        $(".category-name").toggle();
		$(".category-name").next().toggle();
	}
}
xmlhttp.open('GET', "http://hiddencountryrest.com/template2.html", true);
xmlhttp.send();
