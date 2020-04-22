let checkNumber = parseFloat(prompt('Enter your check number', '')),
    tips = parseFloat(prompt('Enter your tip persentage', '')),
    tipAmount,
    total;
if (typeof checkNumber === 'number' && typeof tips === 'number' && tips > -1 && tips < 101 & checkNumber > -1) {
    tipAmount = checkNumber*tips/100;
    total = checkNumber + tipAmount;
    alert(`Check number: ${+checkNumber.toFixed(2)}
Tip: ${+tips.toFixed(2)}%
Tip amount: ${+tipAmount.toFixed(2)}
Total sum to pay: ${+total.toFixed(2)}`);
    } else {
        alert('Invalid input data');
    }