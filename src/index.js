import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import reducers from './reducers';

// This allows us to render our app in the public/index.html file
// inside of the <div id="root"></div>
ReactDom.render(<Provider store={createStore(reducers)}><App /></Provider>, document.getElementById('root'));