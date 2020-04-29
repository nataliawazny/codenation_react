'use strict'

/*function fibonacci() {
    let fibonacciArray = [0, 1];
    let index = (fibonacciArray.length)-1;
    let ivar = fibonacciArray[index];
    while (ivar<=350) {
            fibonacciArray.push((fibonacciArray.length - 1) + (fibonacciArray.length - 2));
    }
    return fibonacciArray;
}*/

const fibonacci = () => {
    let fibonacciArray = [0,1]
    var n1 = fibonacciArray[0]
    var n2 = fibonacciArray[1]
    let ivar = 0

    while(ivar<=350){
  
        ivar = n1+n2
        n1 = n2
        n2 = ivar
        fibonacciArray.push(ivar)
    }
return fibonacciArray;
}

function isFibonnaci(num) {
    let resultado = fibonacci().find(elementNum => elementNum === num);
    if (resultado != undefined) {
        return true;
    } else {
        return false;
    }
    
}
    
module.exports = {
    fibonacci,
    isFibonnaci
}
