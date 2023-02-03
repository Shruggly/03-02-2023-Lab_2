//Boolean
var boolExample = false;
console.log("Value of boolExample is: " + boolExample);
//Number
var decimal = 6;
console.log("Value of decimal is: " + decimal);
//String
var colour = "blue";
console.log("Value of colour is: " + colour);
//Array
var list = [1, 4, 7];
console.log("Value of the array list is: " + list);
console.log("Value of the first number in the array list is: " + list[0]);
//Tuple
var tupleExample;
tupleExample = [" Henry", 6];
console.log(tupleExample[0].substring(1) + " " + tupleExample[1]);
//Enum
var Colour;
(function (Colour) {
    Colour[Colour["Red"] = 0] = "Red";
    Colour[Colour["Green"] = 1] = "Green";
    Colour[Colour["Blue"] = 2] = "Blue";
})(Colour || (Colour = {}));
var c = Colour.Red;
console.log("Value of the tuple is: " + Colour.Red);
//Unknown
var unSure = 4;
unSure = "maybe a string instead?";
unSure = false;
console.log("Value of unSure is definetly: " + unSure);
//Any
var looselyTyped = 4;
console.log("Value of looselyTyped is: " + looselyTyped);
//Void
var unusable = undefined;
console.log("Value of unusable is: " + unusable);
//Null and Undefined
var u = undefined;
var n = null;
console.log("Value of U and N is: " + undefined + " and " + null);
//Never
//Examples of Never in use
function error(message) {
    throw new Error(message);
}
function fail() {
    return error("Something failed");
}
function infiniteLoop() {
    while (true) { }
}
//Object
/*object is a type that represents the non-primitive type,
i.e. anything that is not number, string, boolean, bigint, symbol, null, or undefined.
With object type, APIs like Object.create can be better represented. For example:*/
/*declare function create(o: object | null): void;
create({ prop: 0 });
create(null);*/ 
