//check if a  number is Prime and return the values its divisable by


function divisors(integer) {
    const array = []
    
    for (let i = 2; i < integer; i++) {
      if(integer % i === 0){
      array.push(i)
    } 
}  
    if(array.length === 0){
        console.log(integer + " is prime")
    } else {
        console.log(array)
    }
};

divisors(10)

//Square every digit of a number. Must input as int and return as int

function squareDigits(num) {
    var digits = ("" + num).split("");
    var numList = ""

    for (let i = 0; i < digits.length; i++) {
        numList += (Math.pow(digits[i], 2)); 
    } return Number(numList)
      


  
};

squareDigits(9119)


//add two numbers and convert to Binary 

function addBinary(a,b) {
    result = a + b
    return (result >>> 0 ).toString(2);

}

// Your task is to make a function that can take any non-negative integer
// as a argument and return it with its digits in descending order. 
// Essentially, rearrange the digits to create the highest possible number.

function descendingOrder(n){
    var digits = (""+ n).split("");
    digits.sort(function(a,b){return b-a});
    var digits = digits.join("");
    return Number(digits);

  }

  descendingOrder(596578)

//In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". 
// You have function with one side of the DNA (string, except for Haskell); 
// you need to get the other complementary side. 
// DNA strand is never empty or there is no DNA at all (again, except for Haskell).

  function DNAStrand(dna){
    var splitString = (""+ dna).split("");
    for(let i = 0; i < splitString.length; i++){
        if(splitstring[i] == "A") {
            splitstring[i].replace(/A/,"T");
        }
    }

}
  DNAStrand("ATTGC");
// In this kata you should simply determine, whether a given year is a leap year or not. In case you don't know the rules, here they are:
// years divisible by 4 are leap years
// but years divisible by 100 are not leap years
// but years divisible by 400 are leap years

  function isLeapYear(year) {
    // TODO
safasf 


    
  }