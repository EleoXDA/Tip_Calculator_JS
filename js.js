function calculateTip() {
    // Get the values from the input fields
    var bill = document.getElementById('bill').value;
    var tipPercentage = document.getElementById('tip').value;

    // Validate input
    if (bill === '' || tipPercentage === '') {
        alert("Please enter values");
        return;
    }
    if (Number(tipPercentage) > 100 || Number(tipPercentage) < 0) {
        alert("Please enter a valid tip percentage");
        return;
    }

    // Calculate the tip
    var tipAmount = (bill * tipPercentage) / 100;

    // Display the result
    document.getElementById('result').innerHTML = "You should tip: $" + tipAmount.toFixed(2);
}
