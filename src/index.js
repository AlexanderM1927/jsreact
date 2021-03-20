//Leonardo Bolaños García 1826808
import Contador from './contador'
import React from 'react';
import ReactDOM from 'react-dom';

const divRoot = document.querySelector('#root');

ReactDOM.render(<Contador name="Leonardo Bolaños" propNum={10} />, divRoot);
