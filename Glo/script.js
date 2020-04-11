'use strict';

let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);  
}
let isString = function(n){
  return isNaN(n) && n !== '' && n !== NaN && n !== null && typeof(n) !== 'undefined';
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
  expensesMonth: 0,
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  mission: 5000,
  percentDeposit: 0,
  moneyDeposit: 0,
  budgetMonth: 0,
  goal: 0,
  period: 3,
  budgetDay: 0,
  asking: function(){
    if(confirm('Do you have any additional income?')){
      let itemIncome = 0, cashIncome = 0;

      do {
        itemIncome = prompt('What is your additional income?', '500');
        } while(!isString(itemIncome));
        do {
        cashIncome = prompt('The amount of additional income', '1000');
        } while (!isNumber(cashIncome));

          appData.income[itemIncome] = cashIncome;    
    }

    let addExpenses = 0;
    do{ addExpenses = prompt('Please, list your main expenditure', "living expenses tralivali");}
    while(!isString(addExpenses));

    appData.addExpenses = addExpenses.toLowerCase()
        .split(' ')// each word split from eachother
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))//separately capitalysing 1st letter and adding the rest
        .join(', ');// separating by coma and space

    appData.deposit = confirm('Do you have a saving account?');
    appData.statusInformation = appData.getStatusIncome();
    let sum = 0, amountItem = 0;
    for(let i = 0; i < 2; i++){         
          do {
          amountItem = prompt('List your essential expenses', 'rent, fuel');
          } while(!isString(amountItem));
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

  ///mission of months you will achieve the goal
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
  getInfoDeposit: function(){
      if(appData.deposit){
        do {appData.percentDeposit = prompt('What is the interest rate?', '0.03');}
      while (!isNumber(appData.percentDeposit));
      do {appData.moneyDeposit = prompt('The amount of saving account', '10000')}
      while (!isNumber(appData.moneyDeposit));
      }
  },
  calcSaveMoney: function(){
    return appData.budgetMonth * appData.period;
  }

};

appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();
appData.getStatusIncome();
appData.getInfoDeposit();
appData.calcSaveMoney();




console.log('Your expenses are: ' + appData.expensesMonth);
console.log('mission will be achieved in ' + appData.goal + ' months');
console.log(appData.percentDeposit, appData.moneyDeposit, appData.calcSaveMoney());
console.log(appData.addExpenses);

/*
for(var key in objects) {
    var value = objects[key];
}

 };*/
 




  
    //
    
     //a.toLowerCase();
     //a.charAt(0).toUpperCase() + a.substr(1) +