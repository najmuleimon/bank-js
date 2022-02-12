// bank calculation

// get input value
function getInput(inputValue){
    let inputField = document.getElementById(inputValue)
    let amount = parseFloat(inputField.value)
    inputField.value = ""
    return amount
}

// get current balance
function getBalance(){
    const currentBalance = document.getElementById("total-balance").innerText
    const currentAmount = parseFloat(currentBalance)
    return currentAmount
}

// update total field
function updateTotal(fieldId, amount){
    let total = document.getElementById(fieldId)
    let prevTotal = parseFloat(total.innerText)
    total.innerText = prevTotal + amount
}

// update balance
function updateBalance(amount, isAdd){
    const balanceTotal = document.getElementById("total-balance");
    const previousBalanceTotal = getBalance();
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - amount;
    }
}

// deposit amount
document.getElementById("btn-deposit").addEventListener("click", function(){
    const getDepositAmount = getInput("deposit-amount")
    if(getDepositAmount > 0){
        updateTotal("total-deposit", getDepositAmount)
        updateBalance(getDepositAmount, true)
    }
})

// withdraw amount
document.getElementById("btn-withdraw").addEventListener("click", function(){
    const getWithdrawAmount = getInput("withdraw-amount")
    const myBalance = getBalance()
    if(getWithdrawAmount > 0 && getWithdrawAmount <= myBalance){
        updateTotal("total-withdraw", getWithdrawAmount)
        updateBalance(getWithdrawAmount, false)
    }
    if (getWithdrawAmount > myBalance) {
        document.getElementById("error-msg").innerText = `Your Balance is $${myBalance}. You can not withdraw $${getWithdrawAmount}`;
    }
})