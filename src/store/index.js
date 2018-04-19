import { compose, createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from '../reducers';

// Redux debugging console helper
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const storeConfig = createStore(
    reducers,
    {},
    composeEnhancers(applyMiddleware(ReduxThunk))
);

export const store = storeConfig;
