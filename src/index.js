import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {ToastContainer} from 'react-toastify'


ReactDOM.render(
<div>
    <ToastContainer />
    <App />
</div>, document.getElementById('root'));
registerServiceWorker();
