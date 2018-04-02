jQuery(document).ready(function($) {
  	
	if ($(window).scrollTop() > 200) {
		$('header').addClass('bg-light');
	};

  	$(window).scroll(function() {
	var header = $('header');
	var scrollPos = $(window).scrollTop();    

	    if (scrollPos > 200) {
	      header.removeClass('navbar-transparent');
	      header.addClass('bg-light');
	    } else {
	      header.removeClass('bg-light');
	      header.addClass('navbar-transparent');
	    }
  	});

  	// Add scrollspy to <body>
	$('body').scrollspy({target: "#navbar", offset: 0});
	// Add smooth scrolling on all links inside the navbar
	$("#navbar a").on('click', function(event) {
	  // Make sure this.hash has a value before overriding default behavior
	  if (this.hash !== "") {
	    // Prevent default anchor click behavior
	    event.preventDefault();
	    // Store hash
	    var hash = this.hash;
	    // Using jQuery's animate() method to add smooth page scroll
	    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
	    $('html, body').animate({
	      scrollTop: $(hash).offset().top
	    }, 600, function(){
	    // Add hash (#) to URL when done scrolling (default click behavior)
	      window.location.hash = hash;
	    });
	  } // End if
	});

	$('.navbar-brand').on("click",function() {
	    $('html, body').animate({ scrollTop: 0 }, '600', function () {
	    });
	});

	$('.navbar-collapse a').click(function(){
    	$(".navbar-collapse").collapse('hide');
	});

	$('.navbar-brand').click(function(){
    	$(".navbar-collapse").collapse('hide');
	});
});