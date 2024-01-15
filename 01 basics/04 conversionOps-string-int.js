let score = "69"
console.log('type of score variable:', typeof(score)) //prints data type (string)
console.log('value in score varianle:', score) // prints value (69) as string
let score_int = Number(score) // concerts number in string format to int format
console.log('type of score variable post conversion:', typeof(score_int)) // prints datatype (number/int)
console.log('value in score variable post convertion:', score_int) //prints value as int (69)
let number_with_letters = "8008135f" //string with a combination of numbers and letters
console.log('type of number_with_letters variable:', typeof(number_with_letters)) //prints datatype of variable(string)
console.log('value in number_with_letters variable:', number_with_letters) // prints variable value correctly
let number_with_letters_conv = Number(number_with_letters)// converts variable numbers_with_letters to integer without error, but value stored is NaN
console.log('type of number_with_letters variable after conversion:', typeof(number_with_letters)) // prints the datatype after conversion (integer/number)
console.log('value in number_with_letters_conv(postconversion):', number_with_letters_conv) //prints value, outputs Nan, not correct value


//if a string with any value but a number is present is converted, it will be converted without error, however the value after conversion will be NaN 

/*
long form of NaN: not a number
use String() to convert any datatype to string
*/