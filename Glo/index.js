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
   
   class AppData {
     constructor(){
          this.budget = 0;
          this.income = {};
          this.expensesMonth = 0;
          this.addIncome = [];
          this.expenses = {};
          this.addExpenses = [];
          this.incomeMonth = 0;
          this.deposit = false;
          this.percentDeposit = 0;
          this.moneyDeposit = 0;
          this.budgetMonth = 0;
          this.goal = 0;
          this.budgetDay = 0;
        }


    buttonValidate(){
        if(salaryAmount.value === ''){
          salaryAmount.setAttribute('placeholder', 'Please enter the monthly income!');
          return;
        } else {
          salaryAmount.setAttribute('placeholder', 'Сумма');
          this.start(); 
        }
      };
    start(){
        this.budget = +salaryAmount.value.trim();    
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
       };
      showResult(){
          budgetMonthValue.value = this.budgetMonth;
          budgetDayValue.value = this.budgetDay;
          expensesMonthValue.value = this.expensesMonth;
          additionalExpensesValue.value = this.addExpenses.join(', ');
          additionalIncomeValue.value = this.addIncome.join(', ');
          incomePeriodValue.value = this.calcSaveMoney();
          targetMonthValue.value = this.getTargetMonth();
          periodSelect.addEventListener('input',() =>{
            incomePeriodValue.value = this.calcSaveMoney.call(this); 
          })       
    }
      addExpensesBlock(){
          const cloneExpensesItem = expensesItems[0].cloneNode(true);
          expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
          expensesItems = document.querySelectorAll('.expenses-items');
          if(expensesItems.length === 3){
            expensesPlus.style.display = 'none';
            }
          }
      
        addIncomeBlock(){
            const cloneIncomeItem = incomeItems[0].cloneNode(true);
            incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
            incomeItems = document.querySelectorAll('.income-items');
            if(incomeItems.length === 3){
               incomePlus.style.display = 'none';
            }
           }
        getExpenses(){      
            expensesItems.forEach((item) =>{
               const itemExpenses = item.querySelector('.expenses-title').value;
               const cashExpenses = item.querySelector('.expenses-amount').value;
               if(itemExpenses !== '' && cashExpenses !== ''){
                 this.expenses[itemExpenses] = cashExpenses;
               }
            });
          }
        getIncome(){
            incomeItems.forEach((item) =>{
              const itemIncome = item.querySelector('.income-title').value;
              const cashIncome = item.querySelector('.income-amount').value;
              if(itemIncome !== '' && cashIncome !== ''){
                this.income[itemIncome] = cashIncome; 
              }
            });
           }
        getAddIncome(){
             additionalIncomeItem.forEach((item) =>{
               const itemValue = item.value.trim();
               if(itemValue !== ''){
                 this.addIncome.push(item);
               }
             })
          }
        getAddExpenses(){
          
          const addExpenses = additionalExpensesItem.value.split(',');
          addExpenses.forEach((item) => {
            item = item.trim();
            if(item !==''){
              this.addExpenses.push(item);
            }
          })
        }
        getIncomeMonth(){
          for(let key in this.income){
          this.incomeMonth += +this.income[key];}
        }
        getExpensesMonth(){
          for (let key in this.expenses){
            this.expensesMonth += +this.expenses[key];
          } return;
        }
        getBudget(){
          this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth; 
          this.budgetDay = Math.floor(this.budgetMonth / 30);
        };
        getTargetMonth(){
          return Math.ceil(+targetAmount.value / +this.budgetMonth); 
        };
        calcSaveMoney(){
          return this.budgetMonth * periodSelect.value;
        };
        getStatusIncome(){
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
        }
        getInfoDeposit(){
            if(this.deposit){
              do {this.percentDeposit = prompt('What is the interest rate?', '0.03');}
            while (!isNumber(this.percentDeposit));
            do {this.moneyDeposit = prompt('The amount of saving account', '10000')}
            while (!isNumber(this.moneyDeposit));
            }
        }

        reset(){
          inputs.forEach((element) => {
              element.disabled = true;
          });
          btnStart.style.display = "none";
          btnCancel.style.display = "block";
        };
        restart(){
            inputs.forEach((element) =>{
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
        };
        eventListeners(){  
            btnStart.addEventListener('click', this.buttonValidate.bind(this));
            btnCancel.addEventListener('click',this.restart.bind(this));
            expensesPlus.addEventListener('click', this.addExpensesBlock.bind(this));
            incomePlus.addEventListener('click', this.addIncomeBlock.bind(this)); 
            
            periodSelect.addEventListener('input', () => {   
              periodAmount.innerHTML = periodSelect.value;
            });
          };
   };
   const appData = new AppData();
   appData.eventListeners();
   
