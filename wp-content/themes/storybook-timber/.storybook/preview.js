// GLOBAL CSS
import '../patterns/scss/style.scss';
import './_attach.js';

export const parameters = {
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: '#fff',
      },
      {
        name: 'gray',
        value: '#eef0f1',
      },
      {
        name: 'dark',
        value: '#222',
      },
    ],
  },
  layout: 'fullscreen'
};

const Twig = require('twig');
const twigAddAttributes = require('add-attributes-twig-extension');
twigAddAttributes(Twig);
Twig.cache();

const bemClasses = Twig.extendFunction("bem_classes", function( block_class, element_class, modifiers, extra ) {
  let base = block_class;
  let element = element_class;
  if (element) {
    base = base + '__' + element;
  }
  let mods = '';
  let xtra = '';
  if (modifiers) {
    if (Array.isArray(modifiers)) {
      modifiers.forEach(function(modifier) {
        mods = mods + ' ' + base + '--' + modifier;
      });
    } else {
      mods = ' ' + base + '--' + modifiers;
    }
  }
  if (extra) {
    if (Array.isArray(extra)) {
      extra.forEach(function(xtra_item) {
        xtra = xtra + ' ' + xtra_item;
      });
    } else {
      xtra = ' ' + extra;
    }
  }
  return base + mods + xtra;
});
export default bemClasses;
