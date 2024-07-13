var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) { myIndex = 1 }
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}








// // payment


// document.addEventListener('DOMContentLoaded', function() {
//   document.getElementById('rzp-button1').onclick = async function(e) {
//       e.preventDefault();


//       try {

//         const response = { amount: 50000 };
        
//       //   await fetch('/create-order', {
//       //     method: 'POST',
//       //     headers: {
//       //         'Content-Type': 'application/json'
//       //     },
//       //     body: JSON.stringify({ amount: 50000 }) // Amount in smallest currency unit
//       // });

//      // const order = { amount: 50000 };



// var options = {
//   "key": "rzp_test_uuykbWY3BpC1Gb", // Enter the Key ID generated from the Dashboard
//   "amount": "5000", // Amount is in currency subunits. Default is INR (in this example, 50000 paise or ₹500)
//   "currency": "INR",
//   "name": "R sanvi Enterprise",
//   "description": "Test Transaction",
//   "image": "https://sonamrani1.github.io/ganpati-logo.jpg",
//   "order_id": "order_9A33XWu170gUtm", // Pass the id obtained in the previous step
//   "callback_url": "https://sonamrani1.github.io/callback",
//   "prefill": {
//     "name": "manish kumar",
//     "email": "gaurav.kumar@example.com",
//     "contact": "9999999999"
//   },
//   "notes": {
//     "address": "Razorpay Corporate Office"
//   },
//   "theme": {
//     "color": "#3399cc"
//   }
// };



// var rzp1 = new Razorpay(options);
// rzp1.on('payment.failed', function (response){
//   alert("Payment failed. Reason: " + response.error.reason);
//   // Handle failed payment here
// });
// rzp1.open();
// } catch (error) {
// console.error('Error fetching order ID:', error);
// }
// }
// });
// // document.getElementById('rzp-button1').onclick = function (e) {
// //   rzp1.open();
// //   e.preventDefault();
// // }


// const Razorpay = require('razorpay');

// let instance = new Razorpay({
//   key_id: 'rzp_test_uuykbWY3BpC1Gb',
//   key_secret: 'KljmSgqpJCLsf5MrjHuYlGOE'
// });

// let optionsj = {
//   amount: 5, // amount in the smallest currency unit
//   currency: "INR",
//   receipt: "receipt#1",
//   payment_capture: '1' // 1 for automatic capture
// };

// instance.orders.create(optionsj, function (err, order) {
//   console.log(order);
// });





// const crypto = require('crypto');

// let body = req.body.razorpay_order_id + "|" + req.body.razorpay_payment_id;
// let expectedSignature = crypto.createHmac('sha256', 'YOUR_RAZORPAY_SECRET')
//   .update(body.toString())
//   .digest('hex');

// if (expectedSignature === req.body.razorpay_signature) {
//   // Payment is verified
//   console.log("Payment Verified");
// } else {
//   // Payment verification failed
//   console.log("Payment Verification Failed");
// }









// Get the elements
const readMoreBtn = document.getElementById('btn');
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('closeBtn');

// Function to open the popup
function openPopup() {
    popup.style.display = 'flex'; // Show the popup
}

// Function to close the popup
function closePopup() {
    popup.style.display = 'none'; // Hide the popup
}

// Event listeners
readMoreBtn.addEventListener('click', openPopup);
closeBtn.addEventListener('click', closePopup);

// Close the popup when clicking outside the popup content
window.addEventListener('click', function(event) {
    if (event.target === popup) {
        closePopup();
    }
});






// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}




function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}





