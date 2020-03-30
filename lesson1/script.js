
let money = 1700,
income = "job",
deposit = true,
mission = '10000',
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