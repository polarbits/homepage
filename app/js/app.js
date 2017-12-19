/* main js file */

const Vivus = require('vivus');

const logo = new Vivus('bear', {
  type: 'delayed',
  duration: 1500,
  animTimingFunction: Vivus.LINEAR,
});

const text = new Vivus('typo', {
  type: 'oneByOne',
  duration: 200,
  animTimingFunction: Vivus.EASE,
}, () => {
  document.querySelectorAll('.st1').forEach((element) => {
    const shape = element;
    shape.style.fill = '#E61E73';
  });
  document.querySelectorAll('.st0').forEach((element) => {
    const shape = element;
    shape.style.fill = '#fff';
  });
});
