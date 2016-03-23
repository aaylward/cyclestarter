require('../css/style.css');
import Rx from 'rx';
import Cycle from '@cycle/core';
import {makeDOMDriver} from '@cycle/dom';
import render from './views/app_view';
import generateColors from './colors';

function main(sources) {
  const initialColors = generateColors(8);

  //const regenerateClick$ = sources.DOM.select('button.regenerate').events('click');
  const numberOfColors$ = sources.DOM.select('input.number-of-colors').events('change').startWith({currentTarget: {value: '8'}});
  const gridSize$ = sources.DOM.select('input.grid-size').events('change').startWith({currentTarget: {value: '2'}});

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
      .map((events) => {
        let [palette, size] = events.map(e => +e.currentTarget.value);
        return {
          gridSize: size,
          numberOfColors: palette,
          colors: generateColors(palette),
          grid: newGrid(size * size),
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

const newGrid = (size) => {
  const grid = [];
  for (let i=0; i<size; i++) {
    grid.push('#fff');
  }
  return grid;
}

Cycle.run(main, drivers);
