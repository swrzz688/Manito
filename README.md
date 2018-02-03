# Manito
## My 库
---
### 1.通用获取节点方法
* 该函数期望传入一个带有字符串的（选择器 / 标签名）
* 例如：$("#tou") $(".banner") $("div")
.	function $(selector){
.	  var str = selector.slice(1)
.	  if(selector[0] == "#"){
.	    return document.getElementById(str)
.	  }
.	  if(selector[0] == "."){
.	    return document.getElementsByClassName(str)
.	  }
.	  if(selector[0] !== "#" && selector[0] !== "."){
.	    return document.getElementsByTagName(selector)
.	  }
.	}
