//  ==================hero slides============================
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
  setTimeout(carousel, 5000); // Change image every 2 seconds
}










// =========================scroll to top==============================
let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



// =========================login popup=============================
function openForm() {
  document.getElementById("loginForm").style.display = "block";
}

function closeForm() {
  document.getElementById("loginForm").style.display = "none";
}




// ============================show password =================
function myFunction() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}




// ===========================check login form is filled==========================

function checkEmailAndPasswordBeforeRedirect() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (email === "" || password === "") {
    alert("Please fill in both email and password fields.");
  } else if (!emailRegex.test(email)) {
    alert("Invalid email address.");
  } else {
    window.location.href = '../html/dash.html';
  }
}


document.getElementById('loginForm').addEventListener('submit', async (event) => {
  event.preventDefault();
  
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  const response = await fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
  });
  
  const result = await response.json();
  document.getElementById('message').textContent = result.message;
  
  if (response.ok) {
      window.location.href = '../html/dash.html';
  }
});






// ================highlight particular section on click===================
$(document).ready(function() {
  var navLinks = $('nav ul li a');
  var sections = $('section');
  
  $(window).scroll(function() {
      var scrollTop = $(this).scrollTop();

      sections.each(function() {
          var top = $(this).offset().top - 50; // Adjust 50 to your needs (e.g., height of fixed navbar)
          var bottom = top + $(this).outerHeight();

          if (scrollTop >= top && scrollTop <= bottom) {
              var id = $(this).attr('id');
              navLinks.removeClass('active');
              $('nav ul li a[href="#' + id + '"]').addClass('active');
          }
      });
  });
  
  // Smooth scrolling - optional, but enhances user experience
  $('nav ul li a.smooth-scroll').on('click', function(event) {
      event.preventDefault();
      var hash = this.hash;
      var offset = $(hash).offset().top - $('.main-title').outerHeight() - $('.header').outerHeight();
      $('html, body').animate({
          scrollTop:offset
      }, 800, function(){
          window.location.hash = hash;
      });
  });
});




