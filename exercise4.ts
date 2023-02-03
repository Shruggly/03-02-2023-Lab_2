//Boolean
let boolExample: boolean = false;
console.log("Value of boolExample is: "+boolExample);

//Number
let decimal: number = 6;
console.log("Value of decimal is: "+decimal);

//String
let colour: string = "blue";
console.log("Value of colour is: "+colour);

//Array
let list: number[] = [1, 4, 7];
console.log("Value of the array list is: "+list);
console.log("Value of the first number in the array list is: "+list[0]);

//Tuple
let tupleExample: [string, number];
tupleExample = [" Henry", 6]
console.log(tupleExample[0].substring(1)+" "+tupleExample[1]);

//Enum
enum Colour {
    Red = 0,
    Green = 1,
    Blue = 2,
  }
let c: Colour = Colour.Red;
console.log("Value of the tuple is: "+Colour.Red);

//Unknown
let unSure: unknown = 4;
unSure = "maybe a string instead?";
unSure = false;
console.log("Value of unSure is definetly: "+unSure);

//Any
let looselyTyped: any = 4;
console.log("Value of looselyTyped is: "+looselyTyped);

//Void
let unusable: void = undefined;
console.log("Value of unusable is: "+unusable);

//Null and Undefined
let u: undefined = undefined;
let n: null = null;
console.log("Value of U and N is: "+undefined+" and "+null);

//Never
//Examples of Never in use
function error(message: string): never {
    throw new Error(message);
  }

  function fail() {
    return error("Something failed");
  }
   
  function infiniteLoop(): never {
    while (true) {}
  }

//Object
/*object is a type that represents the non-primitive type,
i.e. anything that is not number, string, boolean, bigint, symbol, null, or undefined.
With object type, APIs like Object.create can be better represented. For example:*/

    /*declare function create(o: object | null): void;
    create({ prop: 0 });
    create(null);*/