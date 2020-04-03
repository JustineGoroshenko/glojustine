'use strict';


//5.1
let arr = ['123', '453',  '222', '3333', '4455', '678', '9999', '252', '987'];

arr.forEach((item) => {

      if (item.startsWith('2') || item.startsWith('4')){
         console.log(item);
      };
   }) 


   //5.2
   let numbers = [],
   primes = [];


   for(let i = 2;i<=100;i++){
    numbers.push(i);   
   }
   while(numbers.length){
       primes.push(numbers.shift());
       numbers = numbers.filter(
           function(i){
              return i%primes[primes.length-1]!=0}
       );  
   }
   for(var i=0;i<primes.length;i++){
      primes[i] = primes[i] + " Can be divided by 1 and " + primes[i];
  }
   
   console.log(primes);