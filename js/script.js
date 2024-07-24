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
  setTimeout(carousel, 2000); // Change image every 2 seconds
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
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}




// ============================show password =================
function myFunction() {
  var x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}


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




