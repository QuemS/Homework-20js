
let number = +prompt();
let flag = true;

for (let  j = 2;  j <= number-1;  j++) {
    if (number % j == 0) {
        flag = false;
        break;
        }
   }
   if (flag ) {
       alert(`${number} simple`);
       console.log(number);
    }else{
       alert(`${number} not simple`);
}
   








