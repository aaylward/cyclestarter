/*eslint no-unused-vars: [2, { "varsIgnorePattern": "hJSX" }]*/
import {hJSX} from '@cycle/dom';

export default render;

const render = (props) => {
  return (
    <div>
    { renderHeader() }
    { renderColorContainer(props) }
    { renderGridContainer(props) }
    </div>
  )
}

const renderHeader = () => {
  return (
    <div className="header">
      <h1>Colors and Boxes</h1>
    </div>
  )
}

function renderColorContainer() {
  return (
    <div className="colors">
      <span className="title">Colors</span>
      <input type="text" className="number-of-colors" />
      <button className="regenerate">Regenerate</button>
      <div className="boxes"></div>
    </div>
  )
}

function renderGridContainer() {
  return (
    <div className="cells">
      <span className="title">Grid Size: </span>
      <input type="text" className="grid-size" />
      <span>hold cmd for drag-n-color</span>
      <div className="grid"></div>
    </div>
  )
}
