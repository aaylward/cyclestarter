/*eslint no-unused-vars: [2, { "varsIgnorePattern": "hJSX" }]*/
import {hJSX} from '@cycle/dom';
import constants from '../constants';

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
  const {colors, selectedColor} = props;
  return (
    <div className="colors">
      <span className="title">Colors</span>
      <input type="text" className="number-of-colors" value={colors.length}/>
      <button className="regenerate">Regenerate</button>
      <div className="boxes">
        {renderColors(colors, selectedColor)}
      </div>
    </div>
  )
}

const renderGridContainer = (props) => {
  const {grid, gridSize} = props;
  const availableWidth = document.body.offsetHeight - 280 - constants.MARGIN_COMPENSATION_PIXELS;
  const gridContainerStyle = {
    width: availableWidth + constants.BORDER_COMPENSATION_PIXELS + 'px'
  };

  return (
    <div className="cells">
      <span className="title">Grid Size: </span>
      <input type="text" className="grid-size" value={gridSize} />
      <span>hold cmd for drag-n-color</span>
      <div className="grid" style={gridContainerStyle}>
        {renderGrid(grid, availableWidth)}
      </div>
    </div>
  )
}

const renderColors = (colors, selectedColor) => {
  const colorDivs = [];
  for (let i=0; i<colors.length; i++) {
    const colorId = 'color-id:'+i;
    const classes = getColorClass(i, selectedColor);
    colorDivs.push(<div className={classes} style={{backgroundColor: colors[i]}} id={colorId}></div>);
  }
  return colorDivs;
}

const renderGrid = (cellColors, availableWidth) => {
  const gridCells = [];
  const rowSize = Math.sqrt(cellColors.length);
  const squareSize = (availableWidth/rowSize - constants.BORDER_COMPENSATION_PIXELS) + 'px';

  for (let i=0; i<cellColors.length; i++) {
    gridCells.push(makeCell(i, rowSize, cellColors, squareSize));
  }

  return gridCells;
}

const makeCell = (i, rowSize, cellColors, squareSize) => {
  const cellId = 'cell-id:'+i;
  return <div className={getSquareClass(i, rowSize)} style={getSquareStyle(cellColors[i], squareSize)} id={cellId}></div>
}

const getSquareClass = (i, rowSize) => {
  return `cell${i%rowSize===0 ? ' left' : ''}${i<rowSize ? ' top' : ''}`;
}

const getColorClass = (i, selectedIndex) => {
  return `color option${i===selectedIndex ? ' selected' : ''}`;
}

const getSquareStyle = (color, size) => {
  return { backgroundColor: color, height: size, width: size }
}

export default render;
