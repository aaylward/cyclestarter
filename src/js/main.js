import Cycle from '@cycle/core';
import {makeDOMDriver} from '@cycle/dom';
import app from './views/app_view';

function main(drivers) {
  return {
    DOM: drivers.DOM.select('input').events('click')
      .map(ev => ev.target.checked)
      .startWith(false)
      .map(app)
  };
}

const drivers = {
  DOM: makeDOMDriver('#app')
};

Cycle.run(main, drivers);
