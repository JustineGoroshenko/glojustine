'use strict';

let isNumber = function(n) {
      return !isNaN(parseFloat(n)) && isFinite(n);   //isFinite is it is infinitive it will give you a false
    //if the input is not Number it will question again(return) 
}


let money = '2000',
income = "",
mission = '5000',
period = '',
budgetPerDay = '',
addExpenses = '';
//1 
//CHECKING THE QUALITY OF SUBMIYTTED INFORMATION
  // while(isNaN(money) || money.trim() === '' || money === null ) {

let start = function() {
   do { money = prompt('Your monthly earnings?', '1000');}
   while (!isNumber(money));
   console.log('Your monthly earnings are: ' + money + '£');
}
start();


console.log(typeof deposit);
console.log(typeof income);
console.log(typeof money);
//3.2

//3.3
addExpenses = prompt('Please, list your potential expenditure', "coca, para, chico loco");
console.log(addExpenses.toLowerCase().split(', '));
//3.5
/*let mainExpenses = +prompt('Amount of the main expenses', '200'),
    secExpenses = +prompt('Amount of secondary expenses', '100');

5.1*/
let expenses = [];
let getExpensesMonth = function() {
   let sum = 0, amountItem = 0;
    for(let i = 0; i < 2; i++){
          expenses[i] = prompt('List your expenses', 'rent, fuel');
         do {
             amountItem = prompt('How much would it cost?', "1100");
    } while (!isNumber(amountItem));
      sum += +amountItem;
    };
    return +sum;   
}
let expensesAmount = getExpensesMonth();
console.log('Expenses: ' + expensesAmount); 

//

let getAccumulatedMonth = function(){
   return money - expensesAmount; 
}
let accumulatedMonth = getAccumulatedMonth();
console.log('Monthly savings: ' + accumulatedMonth + "£");

//5.2, 5.3
let  getTargetMonth = function(){
     return Math.ceil( mission / accumulatedMonth); 
   }
    period = getAccumulatedMonth();
   if(period > 0){
     console.log('You will achieve your goal in '+ period + ' months');
   } else {
    console.log('Goal is not achievable');
   };

//4.5  console.log('Goal will be achieved in ' + baba + ' months');
budgetPerDay = Math.floor(accumulatedMonth/30);
console.log( 'Your budget per day: ' + budgetPerDay + "£");

