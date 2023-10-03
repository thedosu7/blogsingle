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
  var addActive = function () {
    var header = document.getElementById('menu');
    var navlinks = header.getElementsByClassName('nav-link');
    for (var i = 0; i < navlinks.length; i++) {
      navlinks[i].addEventListener('click', function () {
        var current = document.getElementsByClassName('active');
        current[0].className = current[0].className.replace(' active', '');
        this.className += ' active';
      });
    }
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
  $(document).ready(function () {
    $('.social-item').hover(function () {
      $('.social-item').removeClass('active');
      $(this).addClass('active');
    });
  });
  $(document).ready(function () {
    $('.tag-list a').hover(function () {
      $('.tag-list a').removeClass('active');
      $(this).addClass('active');
    });
  });
  document.querySelector('.languages').addEventListener('click', function () {
    var languageList = this.querySelector('.language-list');
    languageList.classList.toggle('active');
  });
  // Dom Ready
  $(function () {
    headerFixed();
    preloader();
    addActive();
  });
  $(document).ready(function () {
    $('.video-play').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
      iframe: {
        patterns: {
          youtube: {
            index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

            id: 'v=', // String that splits URL in a two parts, second part should be %id%
            // Or null - full URL will be returned
            // Or a function that should return %id%, for example:
            // id: function(url) { return 'parsed id'; }

            src: 'https://www.youtube.com/embed/h6VAQUws040?si=v8tTmvUFeiu-WsTK', // URL that will be set as a source for iframe.
          },

          // you may add here more sources
        },

        srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
      },
    });
  });
})(jQuery);
