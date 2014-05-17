//String.BetweenExtremeDelimiters=function(s,a,b){var j,i;return (i=s.indexOf(a))>=0&&(j=s.lastIndexOf(b))?s.substring(i+1+a.length,j):''};
//
Object.isPrimitive=function(x){return !Object.prototype.isPrototypeOf(x)};
Object.Stringfy=function(x){return x===''?x:Object.prototype.toString.call(x)};
//
/*
Object.ClassOf=function(x){
 var s;
 if(Object.isPrimitive(x)){
	s=x===null?'null':typeof(x);
 }else{
	s=Object.Stringfy(x).slice(8,-1).toLowerCase()
 };
 return s
};
*/

Object.ClassOf=function(x){return Object.isPrimitive(x)?x===null?'null':typeof(x):Object.Stringfy(x).slice(8,-1).toLowerCase()};




/*
UpperClasses:[object Object|Array|Function|RegExp|String|Boolean|Date|Number|Error|Arguments|Window|global|Set|Map]
*/

console.clear();
//
var m=[undefined,null,
""," ","foo",new String("foo"),
Nan,Infinity,
0,1,1.2,new Number(1.2) ,
false,true,new Boolean(true),
[],[[]],[1,2,3],new Array(1, 2, 3),
/abc/g ,new RegExp("meow"),
{},new Object(),
alert,new Function(""),
Date(),new Date(),
Error(),new Error()];
//
m.forEach(function(x,j){
console.log(Object.ClassOf(x),x);
});
//








/*
//undefined, null | boolean, string, number
var t=typeof o;
,k,is=function(s){k=s;return e===s}
*/
//is=function(s){k=s;return e===s}

