'use strict';

let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);   //isFinite is it is infinitive it will give you a false
//if the input is not Number it will question again(return) 
}

let money = '',
  start = function() {
      do { money = prompt('Your monthly earnings?', '1000');}
      while (!isNumber(money));
      console.log('Your monthly earnings are: ' + money + '£');
    }
start();

let appData = {
  budget: money,
  //income: {},
  expensesMonth: 0,
 // addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  mission: 5000,
  budgetMonth: 0,
  goal: 0,
  budgetDay: 0,
  asking: function(){
    let addExpenses = prompt('Please, list your potential expenditure', "coca, para, chico, loco");
    appData.addExpenses = addExpenses.toLowerCase().split(', ');
    appData.deposit = confirm('Do you have a saving account?');
    appData.statusInformation = appData.getStatusIncome();
    let sum = 0, amountItem = 0;
    for(let i = 0; i < 2; i++){         
          do {
          amountItem = prompt('List your expenses', 'rent, fuel');
          } while(!(amountItem !=='' && amountItem !== null && typeof('amountItem') !== 'undefined'));
          do {
            sum = prompt('How much would it cost?', "100");
          } while (!isNumber(sum));
              sum = +sum;
              appData.expenses[amountItem] = sum;        
    } 
  },
 
  getExpensesMonth: function(){
    for (let key in appData.expenses){
      appData.expensesMonth += +appData.expenses[key];
    } return;
  },
  //Net Budget per Month& day
  getBudget: function(){
    appData.budgetMonth = appData.budget - appData.expensesMonth; 
    appData.budgetDay = Math.floor(appData.budgetMonth / 30);
  },

  ///period of months you will achieve the goal
  getTargetMonth: function(){
    appData.goal =  Math.ceil(appData.mission / appData.budgetMonth); 
  },
  //Will goal be achieved?
  getStatusIncome: function(){
    if( appData.budgetDay > 120 ){
      console.log("You have a high amount of income");
   }
   else if(  appData.budgetDay >= 60 && appData.budgetDay <= 120){
      return ("You have a moderate amount of income");
   } else if( appData.budgetDay >= 0 && appData.budgetDay <= 60){
    return ("You have a low amount of income");
   } else if(appData.budgetDay <= 0) {
    return ("Ups, something went wrong...");
   }
  },
};

appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();
appData.getStatusIncome();

console.log('Your expenses are: ' + appData.expensesMonth);
console.log('Goal will be achieved in ' + appData.goal + ' months');
 for (let key in appData){
      console.log('Наша программа включает в себя данные: key: '+ key + 'value: ' + appData[key]);
    }
/*


 };*/