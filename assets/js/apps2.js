let n = 1000;



console.log(`Таблица простых чисел`);

for (let i = 3; i <=n; i++) {
    let isFail = true;
    for (let  j = 2;  j < i ;  j++) {
        
        if (i % j == 0 ) {
             isFail = false;
             break;
                
        }
    }
    if (isFail ) {
        console.log(`_______${i}_______`);
    }
        
        
}
    
    
    



 
       
        
    

    

   



   



