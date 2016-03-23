import Cycle from '@cycle/core';
import drivers from './drivers';
import app from './views/app_view';

function main(drivers) {
  return {
    DOM: drivers.DOM.select('input').events('click')
      .map(ev => ev.target.checked)
      .startWith(false)
      .map(app)
  };
}

Cycle.run(main, drivers);
