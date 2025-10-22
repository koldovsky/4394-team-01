//Write a function to split a string and convert it into an array of words.
// https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
//1 - Convert a string to an array
const splitStringArray = (string) => string.split(" ");

//Create a function which translates a given DNA string into RNA.
//https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
// 2- Dna-to-Rna
const convertDnaToRna = (dna) => dna.replace(/T/g, 'U');

//Find the maximum and minimum value of a list
//https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
// 3 - Maximum and Minimum value of a list
const getMinValue = (list) => Math.min(...list);

const getMaxValue = (list) => Math.max(...list);


// A function that can return the smallest value of an array
// https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
// 4 - function that can return the smallest value of an array
const getMinFromArray = (arr, toReturn) => toReturn === 'value' ? Math.min(...arr) : arr.indexOf(Math.min(...arr));
