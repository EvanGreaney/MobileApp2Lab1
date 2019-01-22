//Functions
//
//Int Function
function
addition(value: string) {
console.log("Value is: " + value);
}
//Decimal Function
function
DecimalPrintout(value: number) {
console.log("Value is: " + value);
}
//String Function
function
StringPrintout(value: string) {
console.log("Colour is: " + value);
}
//String Sentence Function
function
SentencePrintout(value: string) {
console.log("Sentence is: " + value);
}
function
ArrayPrintout(value: number[]) {
console.log("Array is: " + value);
}
function
EnumPrintout(value: string) {
console.log("Enum is: " + value);
}
function
AnyPrintout(value: any) {
console.log("Any is: " + value);
}
function
StringLengthPrintout(value: string): number {
let num: number = value.length;
return num;
}
function
StringLengthNoSpace(value: string): number{
let num: number = value.replace(/\s+/, "").length;
return num;
}
function 
OptionalSpacesStringLength(value: string, spaces: boolean=false): number{
    let num: number;
    if
    (spaces){
    num = value.replace(/\s+/, "").length;
    }
    else
    {
    num = value.length;
    }
    return num;
}





//Ints
let firstVal: number = 43;
let secondVal: number = 1;
let sumOfVals: string = (firstVal + secondVal).toLocaleString();

//Boolean
let isDone: boolean = false;

//Decimal and Hex,Binary and Octal
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

//String changing value
let color: string = "blue";
color = 'red';
let color2: string = "blue 2";

//String Printout
let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = "Hello, my name is " + fullName + ".\n\n" +
    "I'll be " + (age + 1) + " years old next month.";

//Array
let list: number[] = [1, 2, 3];

//Tuple
    // Declare a tuple type
    let x: [string, number];
    // Initialize it
    x = ["hello", 10]; // OK
    // Initialize it incorrectly
    //x = [10, "hello"]; // Error

    //Tuple Printout
    console.log("Tuple is: "+x[0].substr(1)); // OK
    //console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'

//Enum
enum Color {Red = 1, Green, Blue}
let colorName: string = Color[2];

//Any
let notSure: any = 4;
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
console.log("The String value is: "+StringLengthPrintout(color));
console.log("The String value with no Space is: "+StringLengthNoSpace(color2));
console.log("Optional String Space value is: " + OptionalSpacesStringLength(color));
console.log("Optional String Space value is: " + OptionalSpacesStringLength(color2,true));
