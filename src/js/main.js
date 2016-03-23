require('../css/style.css');
import Rx from 'rx';
import Cycle from '@cycle/core';
import {makeDOMDriver} from '@cycle/dom';
import render from './views/app_view';
import generateColors from './colors';

function main(sources) {
  const initialColors = generateColors(8);

  //const regenerateClick$ = sources.DOM.select('button.regenerate').events('click');
  const numberOfColors$ = sources.DOM.select('input.number-of-colors').events('change');
  const gridSize$ = sources.DOM.select('input.grid-size').events('change');

  let props = {
    gridSize: 2,
    numberOfColors: 8,
    colors: initialColors,
    grid: ['#fff', '#fff', '#fff', '#fff'],
    selectedColor: '#fff',
    drag: false
  };

  return {
    DOM: Rx.Observable.combineLatest(numberOfColors$, gridSize$)
      .map((paletteSize, gridSize) => {
        return {
          gridSize: gridSize,
          numberOfColors: paletteSize,
          colors: generateColors(paletteSize),
          grid: props.grid,
          selectedColor: '#fff',
          drag: false
        }
      })
      .startWith(props)
      .map(render)
  };
}

const drivers = {
  DOM: makeDOMDriver('#app')
};

Cycle.run(main, drivers);
