document.getElementById('btn-withdraw').addEventListener('click',function(){
const withdrawField = document.getElementById('withdraw-field');
const newWithdrawAmountString = withdrawField.value;
// console.log(newWithdrawAmountString)
const newWithdrawAmount = parseFloat(newWithdrawAmountString);

withdrawField.value = '';

const withdrawTotalElement = document.getElementById('Withdraw-total');
const previousWithdrawTotalString = withdrawTotalElement.innerText;
const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
withdrawTotalElement.innerText = newWithdrawTotal;

const balanceTotalElement = document.getElementById('balance-total');
const previousBalanceTotalString = balanceTotalElement.innerText;
const previousBalanceTotalAmount = parseFloat(previousBalanceTotalString);

const newBalanceTotal = previousBalanceTotalAmount -newWithdrawAmount;
balanceTotalElement.innerText = newBalanceTotal;





});
