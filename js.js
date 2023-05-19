function calculateTip() {
  let billAmount = Number(document.getElementById('bill').value);
  let tipPercent = Number(document.getElementById('tip').value);
  let currencySelector = document.getElementById('currency');

  if (isNaN(billAmount) || isNaN(tipPercent)) {
    alert("Please enter valid numbers for both fields.");
    return;
  }

  let tipAmount = billAmount * (tipPercent / 100);
  let totalAmount = billAmount + tipAmount;

  let currencySymbol = getCurrencySymbol(currencySelector.value);
  
  document.getElementById('result').innerHTML = `Tip Amount (${currencySelector.options[currencySelector.selectedIndex].text}): ${currencySymbol}${tipAmount.toFixed(2)}<br>`;
}

function getCurrencySymbol(currency) {
  switch(currency) {
    case "USD":
      return "$";
    case "EUR":
      return "€";
    case "GBP":
      return "£";
    case "CHF":
      return "Fr";
    default:
      return "$";
  }
}
