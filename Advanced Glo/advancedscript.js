'use strict';


//1
let lang = prompt("Please choose your language", 'Eng/Es');
 console.log('Your chosen language: ' + lang);

if(lang == 'eng'){
   console.log('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');
} else if (lang == 'es'){
   console.log('lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo');
} else { console.log('please choose your language');}

//2
let namePerson = prompt("Authorization", 'your name');
 console.log('Your chosen name: ' + namePerson);

if(namePerson == 'Max'){
   console.log('Teacher');
} else if ( namePerson == 'Artem'){
   console.log('CEO');
} else { console.log('Student');}