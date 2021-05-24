import { combineReducers } from 'redux';
import companyReducer from './company';
// import filterReducer from './filter';

const rootReducer = combineReducers({
  companies: companyReducer,
});

export default rootReducer;
