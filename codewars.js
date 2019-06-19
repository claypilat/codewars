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


