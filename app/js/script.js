jQuery(document).ready(function($) {
  $(window).scroll(function() {
    var scrollPos = $(window).scrollTop();
        header = $('header');

    if (scrollPos > 200) {
      header.removeClass('navbar-transparent');
      header.addClass('bg-light');
    } else {
      header.removeClass('bg-light');
      header.addClass('navbar-transparent');
    }
  });
});