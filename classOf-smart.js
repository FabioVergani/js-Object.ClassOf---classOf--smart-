function toStringOver(e){return Object.prototype.toString.call(e)};

function classOf(e){return e===null?'null':e===undefined?'undefined':toStringOver(e).slice(8,-1).toLowerCase()};




/*
console.clear();
//
var m=[undefined,null,
""," ","foo",new String("foo"),Infinity,
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
console.log(classOf(x));
});
//

"undefined"
"null"
"string"
"string"
"string"
"string"
"number"
"number"
"number"
"number"
"number"
"boolean"
"boolean"
"boolean"
"array"
"array"
"array"
"array"
"regexp"
"regexp"
"object"
"object"
"function"
"function"
"string"
"date"
"error"
"error"
*/




/*
console.log(classOf(undefined));
console.log(classOf());
console.log(classOf(''));
console.log(classOf(0));
console.log(classOf(false));
console.log(classOf(null));
console.log(classOf({}));
console.log(classOf([]));

"undefined"
"undefined"
"string"
"number"
"boolean"
"null"
"object"
"array"
*/
