let is_logged_in = true //bool value true
let is_logged_in_conv = Number(is_logged_in) // converts to integer
//console.log(Number(is_logged_in)) //prints one
//console.log(Number(false)) //prints zero
let string_content= 'yomama'
let string_to_bool = Boolean(string_content) //Use Boolean() to convert datatype to bool
//console.log(string_to_bool) //prints true
let empty_string = ''
string_to_bool = Boolean(empty_string)
//console.log(string_to_bool) //prints false
/*
 1 => true
 0 => false
 string with content converted into bool => true
 empty string converted into bool => false 
*/