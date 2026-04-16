
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

document.getElementById("addTrans").addEventListener("click", () => {
    let transAmt = parseInt(document.getElementById("transactionAmt").value)
    AddTrans(transAmt)    
})


function AddTrans(transactionAmt) {
    if (isNaN(transactionAmt)) {
        document.getElementById("warning").textContent = "Please enter a valid Amount"
    } else {
    transName = document.getElementById("transactionName").value
    nameList.unshift(transName)
    amtList.unshift(transactionAmt)
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
    //recentTransUpd()
    for (i=0; i<4; i++) {
    document.getElementById("recent" + (i+1)).textContent = nameList[i] + "," + amtList[i] + "," + typeList[i];
    }
    }
    }
}

