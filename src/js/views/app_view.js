/*eslint no-unused-vars: [2, { "varsIgnorePattern": "hJSX" }]*/
import {hJSX} from '@cycle/dom';
import constants from '../constants';

/*
  var props = {
    gridSize: DEFAULT_GRID_SIZE,
    numberOfColors: DEFAULT_NUMBER_OF_COLORS,
    colors: [],
    grid: [],
    selectedColor: "#fff",
    drag: false
  };
 */

const render = (props) => {
  const div = (
    <div>
    { renderHeader() }
    { renderColorContainer(props) }
    { renderGridContainer(props) }
    </div>
  )

  return div;
}

const renderHeader = () => {
  return (
    <div className="header">
      <h1>Colors and Boxes</h1>
    </div>
  )
}

const renderColorContainer = (props) => {
  const {colors} = props;
  return (
    <div className="colors">
      <span className="title">Colors</span>
      <input type="text" className="number-of-colors" value={colors.length}/>
      <button className="regenerate">Regenerate</button>
      <div className="boxes">
        {renderColors(colors)}
      </div>
    </div>
  )
}

const renderGridContainer = (props) => {
  const {grid, gridSize} = props;
  const availableWidth = document.body.offsetHeight - 200 - constants.MARGIN_COMPENSATION_PIXELS;

  return (
    <div className="cells">
      <span className="title">Grid Size: </span>
      <input type="text" className="grid-size" value={gridSize} />
      <span>hold cmd for drag-n-color</span>
      <div className="grid">
        {renderGrid(grid, availableWidth)}
      </div>
    </div>
  )
}

const renderColors = (colors) => {
  return colors.map(color => {
    return <div className="color option" style={{backgroundColor: color}}></div>
  })
}

const renderGrid = (cellColors, availableWidth) => {
  const gridCells = [];
  const gridSize = cellColors.length;
  const squareSize = (availableWidth/gridSize - constants.BORDER_COMPENSATION_PIXELS) + 'px';
  const rowSize = Math.sqrt(cellColors.length);

  for (let i=0; i<cellColors.length; i++) {
    const cellStyle = getSquareStyle(cellColors[i], squareSize);
    const classes = getSquareClass(i, rowSize);
    gridCells.push(<div className={classes} style={cellStyle} data-id={''+i}></div>);
  }

  return gridCells;
}

const getSquareClass = (i, rowSize) => {
  let classes = 'cell';
  if (i % rowSize === 0) {
    classes += ' left';
  }
  if (i < rowSize) {
    classes += ' top';
  }
  return classes;
}

const getSquareStyle = (color, size) => {
  return {
    backgroundColor: color,
    height: size,
    width: size
  }
}

export default render;
