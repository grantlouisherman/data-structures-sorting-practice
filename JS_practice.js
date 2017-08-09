/*

BASIC QUESTIONS
*/

function verifyPrime(num){
    return num % 2 === 0 || num.toString().split().reduce((a,b) =>(a+b)) % 3 === 0
}

function fib(num){
    if(num === 1 || num === 0){
        return num;
    }else{
        return fib(num - 2) + fib(num - 1);
    }
}

function greastestCommonDivisor(a, b){}


function removeDuplicates (string){
    return string.filter((letter, index )=> ( string.indexOf(letter) === index));
}

function  mergeTwoArrays(arr1,arr2){
    return arr1.concat(arr2).sort((a,b) => (a-b));
}

function swap(){}

function reverseString(str){
    return str.split("").reverse().join("");
}

function reverseSentence(sentence){
    return sentence.split(" ").reverse().join(" ");
}

function palindrome(string){
    return string === str.split("").reverse().join("");
}