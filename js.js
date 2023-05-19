function calculateTip() {
    // Get user input
    var bill = document.getElementById("bill").value;
    var tipPercent = document.getElementById("tip").value;
    var currency = document.getElementById("currency").value;
    
    // Calculate tip
    var tipAmount = bill * (tipPercent / 100);
    var total = Number(bill) + tipAmount;

    // Determine the currency symbol
    var currencySymbol;
    switch (currency) {
        case "USD":
            currencySymbol = "$";
            break;
        case "EUR":
            currencySymbol = "€";
            break;
        case "GBP":
            currencySymbol = "£";
            break;
        case "CHF":
            currencySymbol = "CHF";
            break;
    }

    // Display the result
    document.getElementById("result").innerHTML = "Tip amount: " + currencySymbol + tipAmount.toFixed(2) + ", Total bill: " + currencySymbol + total.toFixed(2);
}
