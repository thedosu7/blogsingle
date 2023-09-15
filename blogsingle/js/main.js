/**
 *  headerFixed
 */

(function ($) {
  'use strict';
  var preloader = function () {
    setTimeout(function () {
      $('.preload-container').fadeOut('slow', function () {
        $(this).remove();
      });
    }, 1500);
  };
  var headerFixed = function () {
    if ($('header').hasClass('header-fixed')) {
      var nav = $('#header_main');

      if (nav.length) {
        var offsetTop = nav.offset().top,
          headerHeight = nav.height(),
          injectSpace = $('<div>', {
            height: headerHeight,
          });
        injectSpace.hide();

        if ($('header').hasClass('style-absolute')) {
          injectSpace.hide();
        } else {
          injectSpace.insertAfter(nav);
        }

        $(window).on('load scroll', function () {
          if ($(window).scrollTop() > offsetTop + headerHeight) {
            nav.addClass('is-fixed');
            injectSpace.show();
          } else {
            nav.removeClass('is-fixed');
            injectSpace.hide();
          }

          if ($(window).scrollTop() > 100) {
            nav.addClass('is-small');
          } else {
            nav.removeClass('is-small');
          }
        });
      }
    }
  };

  // Dom Ready
  $(function () {
    headerFixed();
    preloader();
  });
})(jQuery);
