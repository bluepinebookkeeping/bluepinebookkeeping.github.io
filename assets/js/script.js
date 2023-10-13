$(document).ready(function () {
  // Smooth scrolling for links
  $('a[href^="#"]').on('click', function (event) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 200);
  });

  // Toggle about section
  $('.about-toggle').on('click', function () {
    $('.about-section-expandable').slideToggle();
    $('.about-section-short').slideToggle();
    $(this).text(function (i, text) {
      return text === "Show Less" ? "Learn More" : "Show Less";
    })
  });
  });

  // handle form submission
  $(document).ready(function () {
    $('#contact-form').on('submit', function (e) {
      e.preventDefault();

      // get form data
      var formData = {
        'name': $('#name').val(),
        'email': $('#email').val(),
        'message': $('#message').val()
      };

      // send form data to google cloud function at https://functions-hello-world-3bcmi7543q-uc.a.run.app/
      $.ajax({
        url: 'https://bpb-handle-contact-form-3bcmi7543q-uw.a.run.app',
        type: 'POST',
        data: JSON.stringify(formData),
        success: function(response) {
          console.log(response);
          alert(`Thank you for your message, ${formData['name']}! A copy has been sent to you and to Stephen. He will be in touch soon.`);
          $('#contact-form').trigger('reset');
        },
        error: function(error) {
          alert('There was an error sending your message. Please try again or contact me directly at stephen@bluepinebookeeping.com.');
          console.log(error);
        }
      });
    });


  // Scroll reveal animations
  ScrollReveal().reveal('.section-title', {
    delay: 200,
    duration: 800,
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
  
  });
