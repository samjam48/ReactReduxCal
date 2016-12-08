import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import promise      from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';
import { fetchData } from './actions/index';

var defaultState = { data:[
    {
        "id": 10,
        "start": "2016-12-10T17:30:00Z",
        "end": "2016-12-10T20:30:00Z",
        "label": "Call qif",
        "category": "cyan"
    }
]
        }

const createStoreWithMiddleware = applyMiddleware( promise )(createStore);



const store = createStoreWithMiddleware(reducers, defaultState)

store.dispatch( fetchData() )

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>
  , document.querySelector('.container'));
