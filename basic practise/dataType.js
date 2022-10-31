const rafi='raf raf'
const kafi='kaf kaf'
var mil=rafi+' '+kafi
var baro=12
console.log(mil+baro);


//string conversions

var randString="abc";
var number1=1;
var number2=2;
var containMixtypes1=number1+number2+randString
console.log(containMixtypes1);
var containMixtypes2=randString+number1+number2
console.log(containMixtypes2);



//concert string
var myString = "56.02 degrees centigrade";
 var myInt;
 var myFloat;
 console.log("\"" + myString + "\" is " + parseInt(myString, 10) +
 " as an integer");
 myInt = parseInt(myString, 10);
 console.log("\"" + myString +
 "\" when converted to an integer equals " + myInt);
 myFloat = parseFloat(myString);
 console.log("\"" + myString +
 "\" when converted to a floating point number equals " + myFloat);