import Cycle from '@cycle/core';
import {makeDOMDriver} from '@cycle/dom';
import render from './views/app_view';

function main(sources) {
  const regenerateClick$ = sources.DOM.select('input.regenerate').events('click');

  return {
    DOM: regenerateClick$
      .map(ev => ev.target.checked)
      .startWith(false)
      .map(render)
  };
}


const drivers = {
  DOM: makeDOMDriver('#app')
};

Cycle.run(main, drivers);
