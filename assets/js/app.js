
let number = +prompt();
let isFail = true;



for (let  j = 2;  j <= number-1;  j++) {
    if (number % j == 0) {
        isFail = false;
        break;
        }else{
            
    }
   }
   if (isFail ) {
       alert(`${number} simple`);
       console.log(number);
    }else{
       alert(`${number} not simple`);
}
   








