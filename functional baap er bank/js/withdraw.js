
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // 1..withdraw amount
    const newWithdraw = getElementUsingId('withdraw-field');

    const previousWithdraw = getElementValueById('withdraw-total')

    const totalWithdraw = newWithdraw + previousWithdraw;
    setElementInnerTextById('withdraw-total', totalWithdraw);

    // 2...total balance after withdraw
    const previousTotal = getElementValueById('balance-total');
    const currentTotal = previousTotal - newWithdraw;
    setElementInnerTextById('balance-total', currentTotal);
})