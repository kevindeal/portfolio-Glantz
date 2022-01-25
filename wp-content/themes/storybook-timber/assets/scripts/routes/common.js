/* eslint-disable */
import Filterizr from 'filterizr';
export default {
  init() {



    Filterizr.installAsJQueryPlugin($);
    // JavaScript to be fired on all pages

    /**
     * General helper function to support toggle functions.
     */
    var toggleClasses = function(element) {
      var $this = element,
          $togglePrefix = $this.data('prefix') || 'this';

      // If the element you need toggled is relative to the toggle, add the
      // .js-this class to the parent element and "this" to the data-toggled attr.
      if ($this.data('toggled') == "this") {
        var $toggled = $this.closest('.js-this');
      }
      else {
        var $toggled = $('.' + $this.data('toggled'));
      }
      if ($this.attr('aria-expanded', 'true')) {
        $this.attr('aria-expanded', 'true')
      }
      else {
        $this.attr('aria-expanded', 'false')
      }
      $this.toggleClass($togglePrefix + '-is-active');
      $toggled.toggleClass($togglePrefix + '-is-active');

      // Remove a class on another element, if needed.
      if ($this.data('remove')) {
        $('.' + $this.data('remove')).removeClass($this.data('remove'));
      }
    };

    /*
     * Toggle Active Classes
     *
     * @description:
     *  toggle specific classes based on data-attr of clicked element
     *
     * @requires:
     *  'js-toggle' class and a data-attr with the element to be
     *  toggled's class name both applied to the clicked element
     *
     * @example usage:
     *  <span class="js-toggle" data-toggled="toggled-class">Toggler</span>
     *  <div class="toggled-class">This element's class will be toggled</div>
     *
     */
    $('.js-toggle').on('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      toggleClasses($(this));
    });

    // Toggle parent class
    $('.js-toggle-parent').on('click', function(e) {
      e.preventDefault();
      var $this = $(this);
      $this.toggleClass('this-is-active');
      $this.parent().toggleClass('this-is-active');
    });

    // Prevent bubbling to the body. Add this class to the element (or element
    // container) that should allow the click event.
    $('.js-stop-prop').on('click', function(e) {
      e.stopPropagation();
    });

    // Toggle hovered classes
    $('.js-hover').on('mouseenter mouseleave', function(e) {
      e.preventDefault();
      e.stopPropagation();
      toggleClasses($(this));
    });

    $('.js-hover-parent').on('mouseenter mouseleave', function(e) {
      e.preventDefault();
      var $this = $(this);
      $this.toggleClass('this-is-active');
      $this.parent().toggleClass('this-is-active');
    });

    var contents = $('.c-accordion__body');
    var titles = $('.c-accordion__item');
    titles.on('click', function () {
      var title = $(this);
      contents.filter(':visible').slideUp(function () {
        $('.c-accordion__group li').removeClass('is-opened');
      });

      var content = title.find('.c-accordion__body');

      if (!content.is(':visible')) {
        content.slideDown(function () { title.addClass('is-opened') });
      }
    });


    if ($('.filtr-container').length > 0) {
      console.log('babab')
      const filterizr = $('.filtr-container').filterizr({
        gridItemsSelector: '.filtr-item',
        filter: location.hash ? location.hash.replace("#", "") : 'all',
        setupControls: true,
        gutterPixels: 20,
        spinner: {
          enabled: true,
          fillColor: '#e6378d',
          styles: {
            height: '75px',
            margin: '0 auto',
            width: '75px',
            'z-index': 2,
          },
        },
      });
      filterizr.filterizr('sort', 'title', 'asc');
      $('.c-team__categories-selected').text(location.hash ? location.hash.replace("#", "").replace("-", " ") : "All")
      $(".c-team__categories-menu").on('click', 'li', function () {
        console.log('bans')
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $('.c-team__categories-selected').text($(this).text());
        location.hash = "#" + $(this).text().replace(" ", "-").toLowerCase();
      });
    }
    if ($('.filtr-container2').length > 0) {
        const filterizr2 = $('.filtr-container2').filterizr({
          gridItemsSelector: '.filtr-item',
          filter: location.hash ? location.hash.replace("#", "") : 'all',
          setupControls: true,
          gutterPixels: 20,
          spinner: {
            enabled: true,
            fillColor: '#e6378d',
            styles: {
              height: '75px',
              margin: '0 auto',
              width: '75px',
              'z-index': 2,
            },
          },
        });

      filterizr2.filterizr('sort', 'title', 'asc');
      

      $('.c-companies__categories-selected').text(location.hash ? location.hash.replace("#", "").replace("-", " ") : "All")
      

      $(".c-companies__categories-menu").on('click', 'li', function () {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $('.c-companies__categories-selected').text($(this).text());
        location.hash = "#" + $(this).text().replace(" ", "-").toLowerCase();
      });

      
    } 


    if ($('.filtr-posts').length > 0) {
      const filterizrPosts = $('.filtr-posts').filterizr({
        gridItemsSelector: '.filtr-post',
        setupControls: true,
        layout: 'sameWidth',
        filter: location.hash ? location.hash.replace("#", "") : 'all',
        gutterPixels: 20,
        spinner: {
          enabled: true,
          fillColor: '#e6378d',
          styles: {
            height: '75px',
            margin: '0 auto',
            width: '75px',
            'z-index': 2,
          },
        },
      });

      setTimeout(function () { filterizrPosts.filterizr('sort', 'date', 'dec'); }, 2900);
      $('.c-posts__categories-selected').text(location.hash ? location.hash.replace("#", "").replace("-", " ") : "All")

      $(".c-posts-menu").on('click', 'li', function () {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $('.c-posts__categories-selected').text($(this).text());
        location.hash = "#" + $(this).text().replace(" ", "-").toLowerCase();
      });

      $(".c-posts__categories-menu").on('click', 'li', function () {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $('.c-posts__categories-selected').text($(this).text());
        location.hash = "#" + $(this).text().replace(" ", "-").toLowerCase();
      });
    }

    const observer = new IntersectionObserver(
      (entries, observer) => {
        // Observer Callback
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Toggle class.
            if (entry.target.dataset.toggleClass) {
              entry.target.classList.add(entry.target.dataset.toggleClass);
            }
            // Only allow event once.
            if (entry.target.dataset.doOnce) {
              observer.unobserve(entry.target);
            }
          } else {
            if (entry.target.dataset.toggleClass) {
              entry.target.classList.remove(entry.target.dataset.toggleClass);
            }
          }
        });
      },
      {
        /*
         * Margin around the root.
         * Can have values similar to the CSS margin property,
         * e.g. "10px 20px 30px 40px" (top, right, bottom, left).
         * The values can be percentages. This set of values serves
         * to grow or shrink each side of the root element's bounding
         * box before computing intersections. Defaults to all zeros.
         */
        rootMargin: "0px 0px",
        /*
         * Either a single number or an array of numbers which indicate
         * at what percentage of the target's visibility the observer's
         * callback should be executed. If you only want to detect when
         * visibility passes the 50% mark, you can use a value of 0.5.
         * If you want the callback to run every time visibility passes
         * another 25%, you would specify the array [0, 0.25, 0.5, 0.75, 1].
         * The default is 0 (meaning as soon as even one pixel is visible,
         * the callback will be run). A value of 1.0 means that the
         * threshold isn't considered passed until every pixel is visible.
         */
        threshold: 0.1
      }
    );
    if ($(".js-observe").length > 0) {
      // Add elements to observer.
      [...document.querySelectorAll(".js-observe")[0]].forEach((el) => {
        observer.observe(el);
      });
    }

  },
  finalize() {
  


  },


  
};
