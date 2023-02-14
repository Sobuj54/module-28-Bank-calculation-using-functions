
document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawFieldvalue = withdrawField.value ;
    const withdrawAmount = parseFloat(withdrawFieldvalue);
    // clearing the input/withdraw field
    withdrawField.value = '';

    // setting new total value in withdraw section
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalValue = withdrawTotal.innerText;
    const withdrawTotalAmount = parseFloat(withdrawTotalValue);

    const currentWithdrawBalance = withdrawAmount + withdrawTotalAmount;
    withdrawTotal.innerText = currentWithdrawBalance;

    // setting new total value in balance section
    const totalBalance = document.getElementById('balance-total');
    const currentBalance = totalBalance.innerText;
    const currentTotalBalance = parseFloat(currentBalance);

    const balance = currentTotalBalance - withdrawAmount ;
    totalBalance.innerText = balance;
})