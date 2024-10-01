document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const paymentMonths = document.getElementById('paymentMonths');
    const selectedMonth = paymentMonths.options[paymentMonths.selectedIndex];
    
    const amount = document.getElementById('amount').value;
    const paymentMethod = document.getElementById('paymentMethod').value;

    if (amount && paymentMethod) {
        // Simulate payment process
        alert('Payment successful for ' + selectedMonth.text + '!');

        // Mark the selected month as paid
        selectedMonth.classList.add('paid');
        selectedMonth.disabled = true;

        // Reset form fields
        document.getElementById('amount').value = '';
        document.getElementById('paymentMethod').selectedIndex = 0;
    } else {
        alert('Please fill out all fields.');
    }
});
