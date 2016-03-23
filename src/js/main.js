require('../css/style.css');
import Cycle from '@cycle/core';
import {makeDOMDriver} from '@cycle/dom';
import render from './views/app_view';
import generateColors from './colors';

function main(sources) {
  const initialColors = generateColors(8);

  const regenerateClick$ = sources.DOM.select('button.regenerate').events('click');
  //const numberOfColors$ = sources.DOM.select('input.number-of-colors').events('change');
  //const colorStream$ = Rx.Observable.from(initialColors);

  let props = {
    gridSize: 10,
    numberOfColors: 8,
    colors: initialColors,
    grid: ['#fff', '#fff', '#fff', '#fff'],
    selectedColor: '#fff',
    drag: false
  };

  return {
    DOM: regenerateClick$
      .map(() => props)
      .startWith(props)
      .map(render)
  };
}

const drivers = {
  DOM: makeDOMDriver('#app')
};

Cycle.run(main, drivers);
