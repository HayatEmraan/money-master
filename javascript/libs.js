function makeInt(elementId){
    const makeId = document.getElementById(elementId);
    const makeIdFloat = parseFloat(makeId.value);
    makeId.value = '';
    return makeIdFloat;
}
function innerSetBalance(innerSet, total){
    const inner = document.getElementById(total);
    inner.innerText = innerSet.toFixed(2);
    return innerSet;
}
// function expensesChecker(totalExpenses, remainingBalance){
//     if(totalExpenses > remainingBalance){
//         alert('Expenses cant be more than total Balance');
//         return;
//     }  
// }