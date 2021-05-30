import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createWrapper } from 'next-redux-wrapper';
import rootReducer from './reducers/index';

const middleware = [thunk];
const initialState = {
  companies: {
    companies: [],
    company: {},
  },
};
const makeStore:any = () => createStore(rootReducer, initialState, compose(applyMiddleware(...middleware)));

export type RootState = ReturnType<typeof makeStore.getState>
export type AppDispatch = typeof makeStore.dispatch

export const wrapper = createWrapper( makeStore, { debug: true });
