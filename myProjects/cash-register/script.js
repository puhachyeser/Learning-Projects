let price = 19.5;
let cid = [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0.3], ["QUARTER", 0], ["ONE", 2], ["FIVE", 0], ["TEN", 10], ["TWENTY", 0], ["ONE HUNDRED", 0]];
let nominals = [
    0.01,
    0.05,
    0.1,
    0.25,
    1,
    5,
    10,
    20,
    100
];
const purchaseBtn = document.getElementById("purchase-btn");
const changeDue = document.getElementById("change-due")
const cashInput = document.getElementById("cash");

purchaseBtn.addEventListener("click", () => {
if(Number(cashInput.value) < price) {
    alert("Customer does not have enough money to purchase the item");
    cashInput.value = "";
    return;
}
if(Number(cashInput.value) === price) {
    changeDue.textContent = "No change due - customer paid with exact cash";
    cashInput.value = "";
    return;
}

changeDue.textContent = "";
let cash = Number(cashInput.value);
let change = Number((cash - price).toFixed(2));
let cashInDrawer = 0;
for(let i = 0; i < cid.length; i++) {
    cashInDrawer += cid[i][1];
}
cashInDrawer = Number(cashInDrawer.toFixed(2));

if(cashInDrawer > change) {
    changeDue.textContent = "Status: OPEN ";
}

if(cashInDrawer === change) {
    changeDue.textContent = "Status: CLOSED ";
}

if(cashInDrawer < change) {
    changeDue.textContent = "Status: INSUFFICIENT_FUNDS";
    return;
}

for(let nominalId = 8; change > 0 && nominalId !== -1 ; nominalId--) {
    let count = 0;
    let nominal = nominals[nominalId];
    if (change >= nominal) {
        for(let i = 1; change >= nominal && cid[nominalId][1] > 0; i++) {
            change = Number((change - nominal).toFixed(2));
            cid[nominalId][1] = cid[nominalId][1] - nominal;
            count = i;
        }
        
        if (count !== 0) {
            if (nominalId >= 0 && nominalId < 4) {
                changeDue.textContent += `${cid[nominalId][0]}: $${parseFloat((nominal * count).toFixed(2))} `;
            } else {
                changeDue.textContent += `${cid[nominalId][0]}: $${nominal * count} `;
            }
        }
    }
}

if(changeDue.textContent === "Status: OPEN " || change !== 0) {
    changeDue.textContent = "Status: INSUFFICIENT_FUNDS";
}
});