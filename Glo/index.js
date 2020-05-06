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
      
      if(salaryAmount.value === ''){
        salaryAmount.setAttribute('placeholder', 'Please enter the monthly income!');
        btnStart.disabled = true;
      } else {
       this.budget = +salaryAmount.value;
       console.log('salaryAmount.value: ', salaryAmount.value);

       this.getExpenses();
       this.getIncome();
       this.getIncomeMonth();
       this.getExpensesMonth();
       this.getAddExpenses();
       this.getAddIncome();
       this.getBudget();  
       this.getTargetMonth();
       this.showResult();
       this.calcSaveMoney();
       this.reset();
       console.log(this);
              
      }


       

     },
     showResult: function(){
        budgetMonthValue.value = this.budgetMonth;
        budgetDayValue.value = this.budgetDay;
        expensesMonthValue.value = this.expensesMonth;
        additionalExpensesValue.value = this.addExpenses.join(', ');
        additionalIncomeValue.value = this.addIncome.join(', ');
        targetMonthValue.value = this.getTargetMonth();
        const _this = this;
        periodSelect.addEventListener('input', function(){
          incomePeriodValue.value = _this.calcSaveMoney.call(_this);
          
        })
           
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
      expensesItems.forEach(function(item){
         let itemExpenses = item.querySelector('.expenses-title').value;
         let cashExpenses = item.querySelector('.expenses-amount').value;
         if(itemExpenses !== '' && cashExpenses !== ''){
           appData.expenses[itemExpenses] = cashExpenses;
         }
      });
     },
     getIncome: function(){
      incomeItems.forEach(function(item){
        let itemIncome = item.querySelector('.income-title').value;
        let cashIncome = item.querySelector('.income-amount').value;
        if(itemIncome !== '' && cashIncome !== ''){
          appData.income[itemIncome] = cashIncome; 
        }
        
      });
     /* 
      */
     },
     getAddIncome: function(){
        additionalIncomeItem.forEach(function(item){
          let itemValue = item.value.trim();
          if(itemValue !== ''){
            appData.addIncome.push(item);
          }
        })
     },
     getAddExpenses: function(){
       
       let addExpenses = additionalExpensesItem.value.split(',');
       addExpenses.forEach(function(item){
         item = item.trim();
         if(item !==''){
           appData.addExpenses.push(item);
         }
       })
     },
     asking: function(){
       appData.addExpenses = addExpenses.toLowerCase()
           .split(' ')// each word split from eachother
           .map((s) => s.charAt(0).toUpperCase() + s.substring(1))//separately capitalysing 1st letter and adding the rest
           .join(', ');// separating by coma and space
   
       appData.deposit = confirm('Do you have a saving account?');
       appData.statusInformation = appData.getStatusIncome();
     },
     getIncomeMonth: function(){
      for(let key in appData.income){
      appData.incomeMonth += +appData.income[key];}
     },
    
     getExpensesMonth: function(){
       for (let key in appData.expenses){
         appData.expensesMonth += +appData.expenses[key];
       } return;
     },
     //Net Budget per Month& day
     getBudget: function(){
       appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth; 
       appData.budgetDay = Math.floor(appData.budgetMonth / 30);
     },
   
     ///mission of months you will achieve the goal
     getTargetMonth: function(){
       return Math.ceil(+targetAmount.value / +appData.budgetMonth); 
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
       return appData.budgetMonth * periodSelect.value;

     },
     reset(){
      var allElements = inputs;
      for (var i = 0, l = allElements.length; i < l; ++i) {
       allElements[i].disabled=true;}//disabling all the inputs
      btnStart.style.display = "none";
      btnCancel.style.display = "block";//toggle the buttons


      btnCancel.addEventListener('click', function(){  
      var allElements = inputs;
      for (var i = 0; i < allElements.length; ++i) {
       allElements[i].disabled = false;  //unabling the inputs
            if (allElements[i].type == 'text') {
            allElements[i].value = '';}//clearing the value
        };
        periodSelect.value = 1;
        periodAmount.innerHTML = periodSelect.value;
        btnCancel.style.display = "none"; 
        btnStart.style.display = "block";
        
     });

     }
   
   };
   
   btnStart.addEventListener('click', appData.start.bind(appData));
   expensesPlus.addEventListener('click', appData.addExpensesBlock.bind(appData));
   incomePlus.addEventListener('click', appData.addIncomeBlock.bind(appData));

   periodSelect.addEventListener('input', function(){
     periodAmount.innerHTML = periodSelect.value;
   });


  


   //comments
  //appData.getStatusIncome();
  //appData.getInfoDeposit();
   
   /*
   for(var key in objects) {
       var value = objects[key];
   }
    };
    */
        //a.toLowerCase();
        //a.charAt(0).toUpperCase() + a.substr(1) +