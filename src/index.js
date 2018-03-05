import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(todoApp);
render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
