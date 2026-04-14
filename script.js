username = prompt("Enter name here:");
document.getElementById("Webtitle").textContent = username + "'s Balance Tracker";
balance = parseInt(prompt("What is your current balance"));
while (isNaN(balance)) { 
    alert("Invalid Number")
    balance = parseInt(prompt("What is your current balance"))
};

document.getElementById("currentBal").textContent = "Current Balance: $" + balance;

nameList = []
amtList = []
typeList = []

function recentTransUpd() { 
    for (i=0; i<3; i++){
        document.getElementById("recent" + i).textContent = nameList[i] + "," + amtList[i] + "," + transType[i];
    }
}

document.getElementById("addTrans").addEventListener("click", function () {
    transName = document.getElementById("transactionName").value
    nameList.push(transName)
    transAmt = document.getElementById("transactionAmt").value
    amtList.push(transAmt)
    transType = document.getElementById("transactionType").options[document.getElementById("transactionType").selectedIndex].value
    typeList.push(transType)
    recentTransUpd()
})
