

function getElementUsingId (inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldStringValue = inputField.value ;
    const inputFieldValue = parseFloat(inputFieldStringValue);
    inputField.value = '';
    return inputFieldValue;
}

function getElementValueById (elementId) {
    const element = document.getElementById(elementId);
    const elementValue = element.innerText ;
    const value = parseFloat(elementValue);
    return value;
}

function setElementInnerTextById (elementId , newValue){
    const depositTotal = document.getElementById(elementId);
    depositTotal.innerText = newValue;
}