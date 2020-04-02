'use strict';


//4.1


   let str ='';
function bonbon(object){
   if(typeof object !== 'string'){
      alert('Not a string!');
   } else {
        str = object.trim().slice(0, 30) + "...";
       return str;
   }
}

bonbon('   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem quod unde enim dolorem iusto modi voluptate!            ');
bonbon(5);
console.log(str);