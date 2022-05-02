// Iteration 1: Names and Input

//1.1 Create a variable `hacker1` with the driver's name.

let hacker1 = "Lucas";

//1.2 Print `"The driver's name is XXXX"`.

console.log(`The driver's name is ${hacker1}.`);

//  1.3 Create a variable `hacker2` with the navigator's name.

let hacker2 = "Duke";

//  1.4 Print `"The navigator's name is YYYY"`.

console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals

// Print: 
// `The driver has the longest name, it has XX characters.` or <br>
 
console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)

// `It seems that the navigator has the longest name, it has XX characters.` or <br>


// `Wow, you both have equally long names, XX characters!`.


// Iteration 3: Loops

//  3.1 Print all the characters of the driver's name, separated by a space and [in capitals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)
//  i.e. `"J O H N"`

let newName = " ";
for (let i = 0; i < hacker1.length; i++) {
    newName += hacker1[i].toUpperCase() + " ";
}
console.log(newName.trim());


// 3.2 Print all the characters of the navigator's name, in reverse order. 

let reverseName = " ";
for (let i = hacker2.length -1; i >= 0; i--) {
reverseName += hacker2[i];
};
console.log(reverseName.trim());

/* 3.3 Depending on the [lexicographic order](https://en.wikipedia.org/wiki/Lexicographical_order) of the strings, print: <br>
    - `The driver's name goes first.` <br>
    - `Yo, the navigator goes first definitely.` <br>
    - `What?! You both have the same name?`
    */

let sizeOfDriversName = 0;
let sizeOfNavigatorsName = 0;

 for (let i = 0; i <= hacker1.length; i++) {
    sizeOfDriversName++;
 };

 for (let i = 0; i <= hacker2.length; i++) {
    sizeOfNavigatorsName++;
 };


 if (sizeOfDriversName < sizeOfNavigatorsName) {
     console.log(`The driver's name goes first.`);
 } else if (sizeOfDriversName > sizeOfNavigatorsName) {
     console.log(`Yo, the navigator goes first definitely.`);
 } else {
     console.log(`What?! You both have the same name?`);
 }







