
document.getElementById('btn-deposit').addEventListener('click',function(){
    const depositField = document.getElementById('deposit-field');
    const depositFieldValue = depositField.value ;
    const depositFieldAmount = parseFloat(depositFieldValue);

    // setting total value at deposit section
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalValue = depositTotal.innerText;
    const depositTotalAmount = parseFloat(depositTotalValue);

    const currentDeposit = depositTotalAmount + depositFieldAmount;
    depositTotal.innerText = currentDeposit;
    depositField.value = '';

    // setting total value at balance section
    const totalBalance = document.getElementById('blance-total');
    const totalBalanceValue = totalBalance.innerText;
    const totalBalanceAmount = parseFloat(totalBalanceValue);

    const currentBalance = totalBalanceAmount + depositFieldAmount;
    totalBalance.innerText = currentBalance;

})