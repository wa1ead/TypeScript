console.log("Hello, TyprScript!");

//IMPLICIT TYPES:
let helloWorld = "Hello, World!";

//EXPLICIT TYPES:
let firstName: string = "Walid";
let age: number = 20;

//TUPLES:
type stringAndNumber = [string, number];
let x: stringAndNumber = ["Hi", 10];

//ENUMS: always keys uppercase
enum continents {
  North_America,
  South_America,
  Africa,
  Europe,
  Antartica,
  Australia,
}
//USAGE:
var region = continents.Africa;

//INTERFACES:
interface Users {
  name: string;
  id: number;
}

const user: Users = {
  name: "Walid",
  id: 0,
};

//COMPOSING TYPES -> UNIONS:
type windowStates = "Closed" | "Opened" | "Minimized";
type lockStates = "Locked" | "Unlocked";
type oddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

const oddNumberUnderTen: oddNumbersUnderTen = 3;
{
  /**
ERROR:
const evenNumberUnderTen: oddNumbersUnderTen = 2;
*/
}

const getLength = (parameter: string | string[]) => {
  return parameter.length;
};

getLength("test");
