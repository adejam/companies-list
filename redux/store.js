import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createWrapper } from 'next-redux-wrapper';
import rootReducer from './reducers/index';

const middleware = [thunk];
const store = () => createStore(
  rootReducer,
  compose(applyMiddleware(...middleware)),
);

const wrapper = createWrapper(store, { debug: true });

export default wrapper;
