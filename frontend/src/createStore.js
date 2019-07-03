import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import reducers from './reducers';

export const history = createBrowserHistory();

const middleware = [thunk, routerMiddleware(history)];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistConfig = {
  key: 'hom-project',
  storage,
  whitelist: ['login']
}

const persistedReducer = persistReducer(persistConfig, reducers(history));

export const store = createStore(
  persistedReducer,
  composeEnhancers(
    applyMiddleware(...middleware)
  )
);

export const persistor = persistStore(store);
