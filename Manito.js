//1.通用获取节点方法
//   该函数期望传入一个带有字符串的（选择器 / 标签名）
//   例如：$("#tou") $(".banner") $("div")
function $(selector){
  var str = selector.slice(1)
  if(selector[0] == "#"){
    return document.getElementById(str)
  }
  if(selector[0] == "."){
    return document.getElementsByClassName(str)
  }
  if(selector[0] !== "#" && selector[0] !== "."){
    return document.getElementsByTagName(selector)
  }
}



//2.通用NodeList绑定事件函数
// 该函数期望传入三个参数
//   参数1.   要枚举的元素集合(是个nodelist，不能放一个node节点)，
//   参数2.   要绑定的事件，
//   参数3.   要做的事情（事件处理）
//   bindEvent(调用函数名)
function bindEvent(){
  for(var n=0;n<arguments.length;n++){
    if(typeof arguments[n] == "object"){
      var x = arguments[n]
    }
    if(typeof arguments[n] == "string"){
      var y = arguments[n]
    }
    if(typeof arguments[n] == "function"){
      var z = arguments[n]
    }
  }
  for(var i=0;i<x.length;i++){
    x[i][y] = z 
  }
}



//3.通用NodeList绑定事件函数
function shijian(nodelist,eventType,fn){
  if(arguments.length == 2){
    fn = arguments[1];
    eventType = "onclick"
  }
  for(var i = 0; i < nodelist.length;i++){
    nodelist[i][eventType] = fn
  }
}



//4.返回随机16进制颜色值
// 该函数返回一个十六进制的颜色值,用一个变量来接收这个函数即可
function getsuijiColor(){
  var arr = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
  var result = "#";
  for(var i = 0; i < 6;i++){
    var random = Math.floor(Math.random()*16);
    result += arr[random];
  }
  return result;
}



//5.实现insertAfter方法
//   该函数期望传入两个参数(被选元素和要插入元素)在被选元素后插入元素
//   参数1. newElement (要插入元素)
//   参数2. p3 (要插入的位置节点（被选元素）)
function insertAfter(newElement,p3){
  var parent=p3.parentNode
  if (parent.lastChild == p3) {
    parent.appendChild(newElement)
  } else{
    parent.insertBefore(newElement,p3.nextSibling)
  }
}



//6.返回下一个兄弟节点
//   该函数期望传入一个node节点
//   重新实现nextSibling,直接寻找下一个兄弟元素节点
//   找到距离他最近的下一个兄弟元素节点
function getBrother(brother){
  while(brother.nextSibling.nodeType!=1){
    brother = brother.nextSibling
    if(brother.nextSibling.nodeType==1){
      return brother.nextSibling
    }
  }
}



//7.获取元素的所有子节点
//  该函数期望传入一个node节点
//  找到该节点里面的所有子元素节点
function getchild(sun){
  for(var a=0;a<sun.childNodes.length;a++){
    if(sun.childNodes[a].nodeType==1){
      console.log(sun.childNodes[a])
    }
  }
}
