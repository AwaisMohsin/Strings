//Simple string
console.log('Hello world');
let email = 'awaisbinmohsin@gmail.com';
console.log(email);
//String concatenation
let firstName = 'James';
let SecondName = 'Hugh';
let fullName = firstName+' '+SecondName;
console.log(fullName);
//Getting characters
console.log(fullName[2]);
//String length
console.log(fullName.length);// Here lentgh is property of string, So we dont use ()
//String methods
console.log(fullName.toUpperCase())// Here toUpperCase is method, thats wy we use ();
let reuslt = fullName.toLowerCase()// Here toLowerCase is method, thats wy we use ();
console.log(reuslt);
//Some methods alter the original value some not
let index = email.indexOf('@');
console.log(index);