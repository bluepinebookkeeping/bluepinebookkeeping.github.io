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
  $(document).ready(function () {
    // define rate and speed factor
    var rate = 75;
    var timeSavingsFactor = 0.7;

    // get values from input fields
    const hoursInput = $('#hours');
    const totalOutput = $('#total');
    const calculator = $('#calculator');

    // Calculate estimated mothly cost
    function calculateCost() {
      var hours = hoursInput.val();
      const estimatedHours = hours * timeSavingsFactor;
      const estimatedCost = (estimatedHours * rate).toFixed(2);
      
      if (hours > 0) {
        if (hours > 100) {
          hours = 100;
          hoursInput.val(100);
        }else{
        $('#pricing-estimate').text(`Based on your usual monthly bookkeeping time of ${hours} hours every month, Stephen can complete the job in about ${estimatedHours.toFixed(1)} hours, and it will cost approximately $${estimatedCost} per month (30% faster than industry average).`);
        totalOutput.text("$" + estimatedCost)}
      } else {
        hours = 0;
        hoursInput.val(0);
        totalOutput.text("$0");
        $('#pricing-estimate').text(`Type a number in the box above or click the arrows within the box to estimate your monthly bookkeeping cost.`);
      }
    }

    // set new background position
    function scrollBackground() {
      const hours = hoursInput.val();
      const newBackgroundPosition = hours * 10;
      calculator.css('background-position', `bottom 0 right ${newBackgroundPosition}px`);
    }

    // update cost on input
    hoursInput.on('input', calculateCost);

    // scroll background on hours input
    hoursInput.on('input', scrollBackground);

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
