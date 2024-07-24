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
  