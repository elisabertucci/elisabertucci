/**
 * Elisa Maria Bertucci, portfolio
 * Based on Thomson by Themefisher (https://themefisher.com), MIT licence.
 *
 * Every block only runs when its plugin is loaded and its element is on the
 * page, so one page's missing gallery can no longer stop the rest of the script.
 */
(function ($) {
  'use strict';

  // Scroll-in animations
  if (window.AOS) {
    AOS.init({ once: true });
  }

  // Skill bars (How I work page)
  $(window).on('load', function () {
    if (!$.fn.appear) return;
    $('.progress-bar').each(function () {
      var $bar = $(this);
      var width = $bar.data('percent');
      $bar.css({ transition: 'width 3s' });
      $bar.appear(function () {
        $bar.css('width', width + '%');
        if ($.fn.countTo) {
          $bar.find('.count').countTo({ from: 0, to: width, speed: 3000, refreshInterval: 50 });
        }
      });
    });
  });

  // Question slider (How I work page)
  if ($.fn.owlCarousel && $('.owl-carousel').length) {
    $('.owl-carousel').owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      dots: false,
      autoplayTimeout: 8000
    });
  }

  // Project grid filter (home page)
  var grid = document.querySelector('.shuffle-wrapper');
  if (window.Shuffle && grid) {
    var shuffle = new window.Shuffle(grid, { itemSelector: '.shuffle-item', buffer: 1 });
    $('input[name="shuffle-filter"]').on('change', function (evt) {
      if (evt.currentTarget.checked) shuffle.filter(evt.currentTarget.value);
    });
  }

  // Image lightbox, wherever a gallery uses it
  if ($.fn.magnificPopup) {
    $('.portfolio-gallery').each(function () {
      $(this).find('.popup-gallery').magnificPopup({ type: 'image', gallery: { enabled: true } });
    });
  }
})(jQuery);
