//Functions
//
//Int Function
function addition(value) {
    console.log("Value is: " + value);
}
//Decimal Function
function DecimalPrintout(value) {
    console.log("Value is: " + value);
}
//String Function
function StringPrintout(value) {
    console.log("Colour is: " + value);
}
//String Sentence Function
function SentencePrintout(value) {
    console.log("Sentence is: " + value);
}
function ArrayPrintout(value) {
    console.log("Array is: " + value);
}
function EnumPrintout(value) {
    console.log("Enum is: " + value);
}
function AnyPrintout(value) {
    console.log("Any is: " + value);
}
function StringLengthPrintout(value) {
    var num = value.length;
    return num;
}
function StringLengthNoSpace(value) {
    var num = value.replace(/\s+/, "").length;
    return num;
}
function OptionalSpacesStringLength(value, spaces) {
    if (spaces === void 0) { spaces = false; }
    var num;
    if (spaces) {
        num = value.replace(/\s+/, "").length;
    }
    else {
        num = value.length;
    }
    return num;
}
//Ints
var firstVal = 43;
var secondVal = 1;
var sumOfVals = (firstVal + secondVal).toLocaleString();
//Boolean
var isDone = false;
//Decimal and Hex,Binary and Octal
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
//String changing value
var color = "blue";
color = 'red';
var color2 = "blue 2";
//String Printout
var fullName = "Bob Bobbington";
var age = 37;
var sentence = "Hello, my name is " + fullName + ".\n\n" +
    "I'll be " + (age + 1) + " years old next month.";
//Array
var list = [1, 2, 3];
//Tuple
// Declare a tuple type
var x;
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
//x = [10, "hello"]; // Error
//Tuple Printout
console.log("Tuple is: " + x[0].substr(1)); // OK
//console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'
//Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var colorName = Color[2];
//Any
var notSure = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
//Function Call
addition(sumOfVals);
DecimalPrintout(decimal);
DecimalPrintout(hex);
DecimalPrintout(binary);
DecimalPrintout(octal);
StringPrintout(color);
SentencePrintout(sentence);
ArrayPrintout(list);
EnumPrintout(colorName);
AnyPrintout(notSure);
console.log("The String value is: " + StringLengthPrintout(color));
console.log("The String value with no Space is: " + StringLengthNoSpace(color2));
console.log("Optional String Space value is: " + OptionalSpacesStringLength(color));
console.log("Optional String Space value is: " + OptionalSpacesStringLength(color2, true));
