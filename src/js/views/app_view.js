/*eslint no-unused-vars: [2, { "varsIgnorePattern": "hJSX" }]*/

import {hJSX} from '@cycle/dom';

export default (toggled) =>
<div>
  <input type="checkbox" /> Toggle me
  <p>{toggled ? 'UPUPUP' : 'off'}</p>
</div>
