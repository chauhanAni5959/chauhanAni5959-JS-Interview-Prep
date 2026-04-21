// String in JS

// let str = "Ankit";
// let res = "";
// for(let i = str.length -1; i >= 0; i--){

//     res = res + str[i];


// }
// console.log(res);


// let s = "abcd";
// let t = "abcde";
// let res = "";
// for (let i = 0; i < s.length; i++) {
//     if (s[i] != t[i]) {
//         res = t[i];

//     }
//     return res;

// }


// Problem no 1 

// function truncate(str, max) {
//     if (str.length > max) {
//         return str.slice(0, max) + "...";

//     }
//     else {
//         return str;
//     }
// }

// console.log(truncate("I want to you tell me something", 13));

// Problem No 2

// function palindromeNumber(num) {

//     return num < 0 ? false : num === +num.toString().split("").reverse().join("");

// }

// console.log(palindromeNumber(0));

// Problem No 3

// function hammeredString(str1, str2) {
//     let length = Math.max(str1.length, str2.length);
//     let count = 0;
//     for (let i = 0; i < length; i++) {
//         if (str1[i] !== str2[i]) {
//             count++;

//         }

//     }
//     console.log(count);

// }


// hammeredString("hello", "hallm");

// How to convert number into binary using toString function
let x = 4;
console.log(x.toString(2)+ "0");