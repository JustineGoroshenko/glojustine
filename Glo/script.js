'use strict';

let money = '2000',
income = "job",
deposit = true,
mission = '5000',
period = 12,
budgetPerDay = (money/30),
addExpenses = 'Taxes, Scholarship, Food';
//1
console.log(typeof deposit);
console.log(typeof income);
console.log(typeof money);
//2
console.log(addExpenses.length);
//3
console.log('Период равен ' + period + ' месяцев и Цель заработать ' + mission + ' Euro');
//4
console.log(addExpenses.toLowerCase().split(', '));
//5
console.log(budgetPerDay + ' euro') ;
console.log('Thank you for your time')// :)




//3.2
money = +prompt('Your monthly earnings?');
console.log(money);
//3.3
addExpenses = prompt('Please, list your potential expenditure', ' ,     , ');
console.log(addExpenses);
//3.4
deposit = confirm('Press ok if you have a saving account');
console.log(deposit);
//3.5
let mainExpenditures = prompt('Please list your main expenditures'),
    secExpenditures = prompt('Please list your secondary expenditures'),
    mainExpenses = +prompt('Amount of the main expenses'),
    secExpenses = +prompt('Amount of secondary expenses'),
//3.6 
    budgetMonth = money - (mainExpenses + secExpenses);
    console.log(budgetMonth);
//3.7
   period =  Math.ceil((mission/budgetMonth));
   console.log('Goal will be achieved in ' + period + ' months');
//3.8
   budgetPerDay = Math.floor(budgetMonth/30);
   console.log('Daily budget is: ' + budgetPerDay + '£ per day');
//3.9



if( budgetPerDay > 120 ){
   console.log("you have a high amount of income");
}
else if(  budgetPerDay >= 60 && budgetPerDay <= 120){
   console.log("you have a moderate amount of income");
} else if( budgetPerDay >= 0 && budgetPerDay <= 60){
   console.log("you have a low amount of income");
} else if(budgetPerDay <= 0) {
   console.log("ups");
}