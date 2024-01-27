/*
PRIMITIVE
---------
7 types: String, Number, Boolean, null, undefined, Symbol, BigInt, 

*/

/*
Referace (non-primitive)
 types: array,objects,functions

*/



const num1 = Symbol('1234')
const num2 = Symbol('1234')
/*
SYMBOLS

console.log(num1 == num2);
//returns false as a symbol once defined is unique 

*/

let myArray = ['cocaine','herioin','Mdma',420] // arrays

let myObj = { // objects
    name : 'patrick jane',
    age : 'lookin too young to be that old',
    kills: 1205405 //idek wanted to put int so ye s 
}

const myFunction = function(){ // functions
    console.log('Hello this is a function');
}


//NOTE: many of these are defined for the first time here, will go more in depth later

// typeof is used for checking datatype