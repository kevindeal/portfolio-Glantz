// Simple Attach.behaviors usage for Storybook

window.Attach = { behaviors: {} };

(function(Attach) {
  Attach.throwError = function(error) {
    setTimeout(function() {
      throw error;
    }, 0);
  };

  Attach.attachBehaviors = function(context, settings) {
    context = context || document;
    settings = settings;
    const behaviors = Attach.behaviors;

    Object.keys(behaviors).forEach(function(i) {
      if (typeof behaviors[i].attach === 'function') {
        try {
          behaviors[i].attach(context, settings);
        } catch (e) {
          Attach.throwError(e);
        }
      }
    });
  };
})(Attach);

/*
 * Toggle Classes
 *
 * @description
 * Toggle is-active class on element.
 *
 */
const toggleClasses = e => {
  [...document.querySelectorAll('.js-toggle')].forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();

      if (el.classList.contains('js-stop-prop')) {
        e.stopPropagation();
      }

      var togglePrefix = el.dataset.prefix || 'this',
        toggled;

      if (el.dataset.toggled === "this") {
        toggled = el.closest('.js-this');
      } else {
        toggled = document.querySelector('.' + el.dataset.toggled);
      }

      el.classList.toggle(togglePrefix + '-trigger-is-active');

      // If a class prefix is available, prepend it.
      if (el.dataset.prefix && toggled) {
        toggled.classList.toggle(togglePrefix + '-is-active');
      } else if (toggled) {
        toggled.classList.toggle('is-active');
      }

      // Remove a class on another element, if needed.
      if (el.dataset.remove) {
        [...document.querySelectorAll('.' + el.dataset.toggled)].forEach(element => {
          element.classList.remove(el.dataset.remove);
        });
      }
    });
  });
}
document.addEventListener('DOMContentLoaded', toggleClasses);
