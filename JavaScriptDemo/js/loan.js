function calculate() {
    //Look up the input and output elements in the document
    const amount = document.getElementById("amount");
    const apr = document.getElementById("apr");
    const years = document.getElementById("years");
    const payment = document.getElementById("payment");
    const total = document.getElementById("total");
    const totalinterest = document.getElementById("totalinterest");


    const principal = parseFloat(amount.value);
    const interest = parseFloat(apr.value) / 100 / 12;
    const payments = parseFloat(years.value) * 12;


    const x = Math.pow(1 + interest, payments);
    const monthly = (principal * x * interest) / (x - 1);


    if (isFinite(monthly)){

        payment.innerHTML = `Monthly Payment:  ${monthly.toFixed(2)}`;
        total.innerHTML = `Total Payment: ${(monthly * payments).toFixed(2)}`;
        totalinterest.innerHTML = `Total Interest ${((monthly*payments)-principal).toFixed(2)}`;
    }
    else {

        payment.innerHTML = "";
        total.innerHTML = ""
        totalinterest.innerHTML = "";

    }
}





