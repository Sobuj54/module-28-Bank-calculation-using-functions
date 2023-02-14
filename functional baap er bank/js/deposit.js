function getElementUsingId(inputId){
    const inputField = document.getElementById('inputId');
    const inputFieldStringValue = inputField.value ;
    const inputFieldValue = parseFloat(inputFieldStringValue);
    inputField.value = '';
    return inputFieldValue;
}

function getElementById(elementId){
    const element = document.getElementById(elementId);
    const elementValue = element.innerText ;
    const value = parseFloat(elementValue);
    return value;
}

document.getElementById('btn-deposit').addEventListener('click',function(){
    // calling the function
    const newDepositAmount = getElementUsingId('deposit-field');
})