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