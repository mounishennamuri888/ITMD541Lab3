const tip_percentage = document.querySelector("#tip-percentage");
const tip_amount = document.querySelector("#tip-amount");
const total_amount = document.querySelector("#total");
const bill_t= document.querySelector("#bill-total");
const slider = document.querySelector("#tip");

bill_t.addEventListener("change", calculateTip);
slider.addEventListener("input", calculateTip);

//Defining a function to calculate Tip
function calculateTip() {
    if (isNaN(bill_t.value)) {
        alert("ENTER AN INPUT VALUE WHICH IS VALID")
    }
    
    bill_t.value = parseFloat(bill_t.value).toFixed(2);
    let bill = parseFloat(document.getElementById("bill-total").value);
    let tip = document.getElementById("tip").value;

    tip_percentage.value = tip;
    let total_tip = parseFloat(((tip * bill) / 100).toFixed(2));

    tip_amount.value = total_tip;
    // total amount including tip
    total_amount.value = parseFloat(bill + total_tip).toFixed(2);
}
