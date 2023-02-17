document.getElementById('calculate').addEventListener('click', function(){
    const foodCalculate = makeInt('food-calculate');
    const rentCalculate = makeInt('rent-calculate');
    const clothesCalculate = makeInt('clothes-calculate');
    const incomeCalculate = makeInt('income-calculate');
    if(isNaN(foodCalculate, rentCalculate, clothesCalculate, incomeCalculate) || foodCalculate < 0 || rentCalculate < 0 || clothesCalculate < 0 || incomeCalculate < 0){
        alert('Please Fill all Above Information');
        return;
    }
    else{
        const totalExpenses = foodCalculate + rentCalculate + clothesCalculate;
        const remainingBalance = incomeCalculate - totalExpenses;
        // expensesChecker(totalExpenses, remainingBalance);   
        if(totalExpenses > remainingBalance){
            alert('Expenses cant be more than total Balance');
            return;
        }     
        const totalExpensesBalance = innerSetBalance(totalExpenses, 'total-expenses-balance');
        const totalRemainingBalance = innerSetBalance(remainingBalance, 'remaining-total-balance');
    }
    
});
document.getElementById('percentage-calculate').addEventListener('click', function(){
    const percentageInt = makeInt('percentage');
    const percentage = document.getElementById('remaining-total-balance').innerText;
    if(isNaN(percentageInt) || percentageInt == 0 || percentageInt == 100 || percentage < 0){
        alert('Please Check Above. Something went wrong!');
        return;
    }
    // else if (percentage == 0 && percentageInt == 100){
    //     alert('Please Check Above. Something went wrong!');
    //     return;
    // }
    const percentageCalculate = (percentage/100) * percentageInt;
    const savingAmount = innerSetBalance(percentageCalculate, 'saving-total-amount');
    const remainingBalance = percentage - percentageCalculate;
    const remainingBalanceInt = innerSetBalance(remainingBalance, 'remaining-total-balance-after-saving');
})