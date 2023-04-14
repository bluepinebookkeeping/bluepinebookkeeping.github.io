$(document).ready(function () {
  // Smooth scrolling for links
  $('a[href^="#"]').on('click', function (event) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 100);
  });

  // Toggle about section
  $('.about-toggle').on('click', function () {
    $('.about-section-expandable').slideToggle();
    $('.about-section-short').slideToggle();
    $(this).text(function (i, text) {
      return text === "Show Less" ? "Learn More" : "Show Less";
    })
  });

  // Pricing calculator
  $('#pricing-calc-btn').on('click', function () {
    var hours = $('#hours').val();
    var rate = 75;
    var timeSavingsFactor = 0.7;
    var estimatedHours = Math.round(hours * timeSavingsFactor);
    var estimatedCost = estimatedHours * rate;

    if (hours > 0) {
      $('#pricing-estimate').text(`Based on your estimated monthly bookkeeping hours of ${hours}, our services would cost approximately $${estimatedCost} per month (30% faster than industry average).`);
    } else {
      $('#pricing-estimate').text(`Please enter a valid number of hours.`);
    }
  });
  
  // Scroll reveal animations
  ScrollReveal().reveal('.section-title', {
    delay: 200,
    duration: 1000,
    reset: true,
    distance: '50px'
  });

  
  ScrollReveal().reveal(".services-card", {
    delay: 200,
    duration: 800,
    distance: "50px",
    origin: "bottom",
    interval: 150,
  });
  
  ScrollReveal().reveal(".testimonial-card", {
    delay: 200,
    duration: 800,
    distance: "50px",
    origin: "bottom",
    interval: 150,
  });
  
  ScrollReveal().reveal("#calculator", {
    delay: 200,
    duration: 800,
    distance: "50px",
    origin: "bottom",
  });
  });
