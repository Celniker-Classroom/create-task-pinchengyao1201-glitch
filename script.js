
//Profile Section 
document.getElementById("updProfile").addEventListener("click", function () {
    username = document.getElementById("userName").value
    startingBalance = parseInt(document.getElementById("startBal").value)
    document.getElementById("Webtitle").textContent = username + "'s Balance Tracker";
    document.getElementById("currentBal").textContent = "Current Balance: $" + startingBalance;
    document.getElementById("profile").remove();
})


nameList = []
amtList = []
typeList = []

function recentTransUpd() { 
    document.getElementById("recent1").textContent = nameList[0] + "," + amtList[0] + "," + typeList[0];
    document.getElementById("recent2").textContent = nameList[1] + "," + amtList[1] + "," + typeList[1];
    document.getElementById("recent3").textContent = nameList[2] + "," + amtList[2] + "," + typeList[2];
}

document.getElementById("addTrans").addEventListener("click", function () {
    let transactionAmt = parseInt(document.getElementById("transactionAmt").value)
    if (isNaN(transactionAmt)) {
        document.getElementById("warning").textContent = "Please enter a valid Amount"
    } else {
    transName = document.getElementById("transactionName").value
    nameList.unshift(transName)
    transAmt = document.getElementById("transactionAmt").value
    amtList.unshift(transAmt)
    transType = document.getElementById("transactionType").options[document.getElementById("transactionType").selectedIndex].value
    typeList.unshift(transType)
    if (transactionAmt > startingBalance && transType === "Expense") {
        document.getElementById("warning").textContent = "Amount of transaction is higher than starting Balance"
    } else {
    if (typeList[0] === "Income") { 
        startingBalance += Math.abs(parseInt(amtList[0]))
        document.getElementById("currentBal").textContent = "Current Balance:" + startingBalance;
    }
    else if (typeList[0] === "Expense") { 
        startingBalance -= Math.abs(parseInt(amtList[0]))
        document.getElementById("currentBal").textContent = "Current Balance:" + startingBalance;
    }
    document.getElementById("warning").textContent = ""
    recentTransUpd()
    }
    }
})
