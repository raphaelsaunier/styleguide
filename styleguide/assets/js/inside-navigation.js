(function ($) {
  $(document).ready(function () {
    // Init stick inside nav
    if ($(window).width() > 1280) {
      $("#styleguide-inside-nav").stick_in_parent()
        .on("sticky_kit:bottom", function () {
          console.log('toggle bottom');
          $(this).addClass("styleguide-stick-bottom");
        })
        .on("sticky_kit:unbottom", function () {
          console.log('toggle bottom');
          $(this).removeClass("styleguide-stick-bottom");
        });
    }

    // Remove stick feature below 1280px
    $(window).resize(function () {
      if ($(window).width() > 1280) {
        $("#styleguide-inside-nav").stick_in_parent()
          .on("sticky_kit:bottom", function () {
            console.log('toggle bottom');
            $(this).addClass("styleguide-stick-bottom");
          })
          .on("sticky_kit:unbottom", function () {
            console.log('toggle bottom');
            $(this).removeClass("styleguide-stick-bottom");
          });
      } else {
        $("#styleguide-inside-nav").trigger("sticky_kit:detach");
        console.log('unstick');
      }
    });

    // Scroll To position
    $('#styleguide-inside-nav').find('a').click(function (event) {
      event.preventDefault();
      $target = $(this).attr('href');
      $('#styleguide-inside-nav').find('a').removeClass('active');
      $(this).addClass('active');
      $('html, body').animate({
        scrollTop: $($target).offset().top - 100
      }, 800);
    });
  });
})(jQuery_no_conflict);
/*global  jQuery */
