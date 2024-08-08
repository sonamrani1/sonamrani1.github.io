// =========================payment radio button=====================

document.getElementById('paymentForm').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission
    const selectedRadio = document.querySelector('input[name="payment"]:checked');
    if (selectedRadio) {
        const url = selectedRadio.getAttribute('data-url');
        window.location.href = url;
    } else {
        alert('Please select a payment method.');
    }
  });
  



  document.addEventListener('DOMContentLoaded', () => {
    // Retrieve totalPrice from localStorage
    const totalPrice = localStorage.getItem('totalPrice');

    // Display the totalPrice on the payment page
    const totalPriceElement = document.getElementById('totalPrice');
    if (totalPriceElement && totalPrice) {
        totalPriceElement.textContent = `$${totalPrice}`;
    }

    // Clear the totalPrice from localStorage if it's a one-time use
     localStorage.removeItem('totalPrice');
});
