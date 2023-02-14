// all the functions called below is written inside utilities js file

document.getElementById('btn-deposit').addEventListener('click',function(){
    //1.. for deposit purpose
    // calling the function
    const newDepositAmount = getElementUsingId('deposit-field');

    // calling another function
    const previousDepositTotal = getElementValueById('deposit-total');

    // adding values
    const totalValue = newDepositAmount + previousDepositTotal;
    // calling function
    setElementInnerTextById('deposit-total', totalValue);

    //2... for balance pupose
    const balance = getElementValueById('balance-total');
    const totalBalance = balance + newDepositAmount;
    setElementInnerTextById('balance-total', totalBalance);

   
})