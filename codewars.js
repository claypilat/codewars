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