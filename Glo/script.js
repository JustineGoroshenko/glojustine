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
  income: {},
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  mission: 5000,
  //
  asking: function(){
    let addExpenses = prompt('Please, list your potential expenditure', "coca, para, chico, loco");
    appData.addExpenses = addExpenses.toLowerCase().split(', ');
    appData.deposit = confirm('Do you have a saving account?');
  },

  //All expenses
  expensesAmount: 0,//expensesMonth
  getExpensesMonth: function(){
  let sum = 0, amountItem = 0;
    for(let i = 0; i < 2; i++){
          appData.expenses[i] = prompt('List your expenses', 'rent, fuel');
         do {
             amountItem = prompt('How much would it cost?', "100");
    } while (!isNumber(amountItem));
      sum += +amountItem;
    };
    return +sum;   
  },

  //Net Budget per Month
  accumulatedMonth: 0,//budgetMonth
  getAccumulatedMonth: function(){
    return money - expensesAmount; 
  },
  
  //AVAILABLE BUDGET PER DAY
  budgetDay: 0,
  budgetPerDay: function(){//budgetDay
     return Math.floor(accumulatedMonth / 30);
  }, 
 
  ///period of months you will achieve the goal
  period: 0,
  getTargetMonth: function(){
  return  Math.ceil(appData.mission /accumulatedMonth); 
  },

  //Will goal be achieved?
  achievable: '',
  getAchievable: function(){
      if(accumulatedMonth > 0){
      return console.log('You will achieve your goal in '+ period + ' months');
    } else {
    return console.log('Goal is not achievable');
    }
}

};
appData.asking();
//expenses
let expensesAmount = appData.getExpensesMonth();
console.log('Expenses: ' + expensesAmount);

//Savings per month
let accumulatedMonth = appData.getAccumulatedMonth();
console.log('Monthly savings: ' + accumulatedMonth + "£");


//budget per day
let budgetDay = appData.budgetPerDay(); 
console.log( 'Your budget per day: ' + budgetDay + "£");
console.log(budgetDay);

let period = appData.getTargetMonth();
let achievable = appData.getAchievable();



/*


 };*/