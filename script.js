const money = 1700,
      income = 'job',
      deposit = true,
      mission = '10000',
      period = 12,
      budgetPerDay = (money/30);
  var addExpenses = 'taxes, scholarship, food';
//1
console.log(money, income, deposit);
//2
console.log(addExpenses);
//3
var addExpenses = ['taxes', 'scholarship', 'food'];

console.log('Период равен ' + period + ' месяцев и Цель заработать ' + mission + ' Euro');
//4
console.dir(addExpenses);
//or
for (let i = 0; i < addExpenses.length; i++) {
   console.log(addExpenses[i]);
 }

//5
console.log(budgetPerDay + ' euro') ;


