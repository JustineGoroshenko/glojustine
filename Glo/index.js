'use strict'

let btnStart = document.querySelector('#start'),
    btnCancel = document.querySelector('#cancel'), 
   btnPlus = document.getElementsByTagName('button'),
   incomePlus = btnPlus[0],
   expensesPlus = btnPlus[1],
   depositCheck = document.querySelector('#deposit-check'),
   additionalIncomeItem = document.querySelectorAll('additional_income-item'),
   budgetMonthValue = document.getElementsByClassName('budget_month-value')[0],
   budgetDayValue = document.getElementsByClassName('budget_day-value')[0],
   expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0],
   additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0],
   additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0],
   inputs  = document.querySelectorAll("input[type=text]"),
   incomePeriodValue = document.getElementsByClassName('income_period-value')[0],
   periodSelect = document.querySelector('.period-select'),
   periodAmount = document.querySelector('.period-amount'),

   targetMonthValue = document.getElementsByClassName('target_month-value')[0],
   salaryAmount = document.querySelector('.salary-amount'),
   expensesTitle = document.querySelector('.expenses-title'),
   targetAmount = document.querySelector('.target-amount'),
   expensesItems = document.querySelectorAll('.expenses-items'),
  
      
   additionalExpensesItem = document.querySelector('.additional_expenses-item'),
   incomeItems = document.querySelectorAll('.income-items');

   let isNumber = function(n) {
     return !isNaN(parseFloat(n)) && isFinite(n);  
   }
   let isString = function(n){
     return isNaN(n) && n !== '' && n !== NaN && n !== null && typeof(n) !== 'undefined';
   }
   
   
   let appData = {
     budget: 0,
     income: {},
     expensesMonth: 0,
     addIncome: [],
     expenses: {},
     addExpenses: [],
     incomeMonth: 0,
     deposit: false,
     percentDeposit: 0,
     moneyDeposit: 0,
     budgetMonth: 0,
     goal: 0,
     budgetDay: 0,
     
     start: function() {
       this.budget = +salaryAmount.value;
       
       this.getExpenses();
       this.getIncome();
       this.getIncomeMonth();
       this.getExpensesMonth();
       this.getAddExpenses();
       this.getAddIncome();
       this.getBudget();  
       this.getTargetMonth();
       this.calcSaveMoney();
       this.showResult();
       this.reset();
      
       console.log(this);
     },
     buttonValidate: function(){
       if(salaryAmount.value === ''){
        salaryAmount.setAttribute('placeholder', 'Please enter the monthly income!');
        return;
      } else {
        salaryAmount.setAttribute('placeholder', 'Сумма');
        this.start();
        
      }
     },
     showResult: function(){
        budgetMonthValue.value = this.budgetMonth;
        budgetDayValue.value = this.budgetDay;
        expensesMonthValue.value = this.expensesMonth;
        additionalExpensesValue.value = this.addExpenses.join(', ');
        additionalIncomeValue.value = this.addIncome.join(', ');
        incomePeriodValue.value = this.calcSaveMoney();
        targetMonthValue.value = this.getTargetMonth();
        const _this = this;
        periodSelect.addEventListener('input', function(){
          incomePeriodValue.value = _this.calcSaveMoney.call(_this); 
        });
           
     },
   
     addExpensesBlock: function(){
      let cloneExpensesItem = expensesItems[0].cloneNode(true);
      expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
      expensesItems = document.querySelectorAll('.expenses-items');

      if(expensesItems.length === 3){
         expensesPlus.style.display = 'none';
      }
     },
     addIncomeBlock: function(){
      let cloneIncomeItem = incomeItems[0].cloneNode(true);
      incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
      incomeItems = document.querySelectorAll('.income-items');
      if(incomeItems.length === 3){
         incomePlus.style.display = 'none';
      }
     },
     getExpenses: function(){
      const _this = this;
      expensesItems.forEach(function(item){
         let itemExpenses = item.querySelector('.expenses-title').value;
         let cashExpenses = item.querySelector('.expenses-amount').value;
         if(itemExpenses !== '' && cashExpenses !== ''){
           _this.expenses[itemExpenses] = cashExpenses;
         }
      });
     },
     getIncome: function(){
      const _this = this;
      incomeItems.forEach(function(item){
        let itemIncome = item.querySelector('.income-title').value;
        let cashIncome = item.querySelector('.income-amount').value;
        if(itemIncome !== '' && cashIncome !== ''){
          _this.income[itemIncome] = cashIncome; 
        }
        
      });
     /* 
      */
     },
     getAddIncome: function(){
       const _this = this;
        additionalIncomeItem.forEach(function(item){
          let itemValue = item.value.trim();
          if(itemValue !== ''){
            _this.addIncome.push(item);
          }
        })
     },
     getAddExpenses: function(){
       const _this = this;
       let addExpenses = additionalExpensesItem.value.split(',');
       addExpenses.forEach(function(item){
         item = item.trim();
         if(item !==''){
           _this.addExpenses.push(item);
         }
       })
     },
     asking: function(){
       this.addExpenses = addExpenses.toLowerCase()
           .split(' ')// each word split from eachother
           .map((s) => s.charAt(0).toUpperCase() + s.substring(1))//separately capitalysing 1st letter and adding the rest
           .join(', ');// separating by coma and space
   
       this.deposit = confirm('Do you have a saving account?');
       this.statusInformation = this.getStatusIncome();
     },
     getIncomeMonth: function(){
      for(let key in this.income){
      this.incomeMonth += +this.income[key];}
     },
    
     getExpensesMonth: function(){
       for (let key in this.expenses){
         this.expensesMonth += +this.expenses[key];
       } return;
     },
     //Net Budget per Month& day
     getBudget: function(){
       this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth; 
       this.budgetDay = Math.floor(this.budgetMonth / 30);
     },
   
     ///mission of months you will achieve the goal
     getTargetMonth: function(){
       return Math.ceil(+targetAmount.value / +this.budgetMonth); 
     },
     //Will goal be achieved?
     getStatusIncome: function(){
       if( this.budgetDay > 120 ){
         console.log("You have a high amount of income");
      }
      else if(  this.budgetDay >= 60 && this.budgetDay <= 120){
         return ("You have a moderate amount of income");
      } else if( this.budgetDay >= 0 && this.budgetDay <= 60){
       return ("You have a low amount of income");
      } else if(this.budgetDay <= 0) {
       return ("Ups, something went wrong...");
      }
     },
     getInfoDeposit: function(){
         if(this.deposit){
           do {this.percentDeposit = prompt('What is the interest rate?', '0.03');}
         while (!isNumber(this.percentDeposit));
         do {this.moneyDeposit = prompt('The amount of saving account', '10000')}
         while (!isNumber(this.moneyDeposit));
         }
     },
     
     calcSaveMoney: function(){
       return this.budgetMonth * periodSelect.value;

     },
     reset(){
      inputs.forEach(function(element){
          element.disabled = true;
      });
      btnStart.style.display = "none";
      btnCancel.style.display = "block";
     },
     restart(){
        inputs.forEach(function(element){
          element.disabled = false;
          element.value = '';
         });
        btnCancel.style.display = "none"; 
        btnStart.style.display = "block";
        this.budget = 0,
        this.income = {},
        this.expensesMonth = 0,
        this.addIncome = [],
        this.expenses = {},
        this.addExpenses = [],
        this.incomeMonth = 0,
        this.deposit = false,
        this.percentDeposit = 0,
        this.moneyDeposit = 0,
        this.budgetMonth = 0,
        this.goal = 0,
        this.budgetDay = 0;

        periodSelect.value = 1;
        periodAmount.innerHTML = periodSelect.value;
     }
   
   };
   btnCancel.addEventListener('click',appData.restart.bind(appData));
   btnStart.addEventListener('click', appData.buttonValidate.bind(appData));
   expensesPlus.addEventListener('click', appData.addExpensesBlock.bind(appData));
   incomePlus.addEventListener('click', appData.addIncomeBlock.bind(appData));
   
   periodSelect.addEventListener('input', function(){   
     periodAmount.innerHTML = periodSelect.value;
   });
