'use strict';

let money = '2000',
income = "",
mission = '5000',
period = '',
budgetPerDay = '',
addExpenses = '';
//1 

console.log(typeof deposit);
console.log(typeof income);
console.log(typeof money);
//3.2
money = +prompt('Your monthly earnings?', '1000');
console.log('Your monthly earnings are: ' + money + '£');
//3.3
addExpenses = prompt('Please, list your potential expenditure', "coca, para, chico, loco");
console.log(addExpenses.toLowerCase().split(', '));
//3.5
let mainExpenses = +prompt('Amount of the main expenses', '200'),
    secExpenses = +prompt('Amount of secondary expenses', '100');
//4.1

let expenses = ''; 
function getExpenseMonth(a, b) {
    expenses = a + b;
   return expenses;
}
getExpenseMonth(mainExpenses, secExpenses);

/*  Not working, WHY???
function getExpenseMonth(){
   expenses = mainExpenses + secExpenses;  <----because function do not read variables?
   return expenses;
}*/
console.log('Expenses: ' + expenses); 

//4.2, 4.3
let accumulatedMonth = '';
function getAccumulatedMonth(a, b){
   accumulatedMonth = a - b;
   return accumulatedMonth; 
}
getAccumulatedMonth(money, expenses);
console.log('Monthly savings: ' + accumulatedMonth + "£");

//4.4
function getTargetMonth (a, b){
   period = Math.ceil(a / b);
   return period;
}
getTargetMonth(mission, accumulatedMonth);
console.log('Goal will be achieved in ' + period + ' months');
//4.5

budgetPerDay = Math.floor(accumulatedMonth/30);
console.log( 'Your budget per day: ' + budgetPerDay + "£");

