import '../src/scss/styles.scss';
import React from 'react';

import Hello from './hello';
//var _ = require('lodash');



// var servicios = require("./servicios");
// servicios.setValor(servicios.getSuma(16.5, 20));

//console.log('ffdhsi');

/*import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);*/

ReactDOM.render(<Hello name='React' />, document.getElementById('root'));