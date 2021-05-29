import { combineReducers } from 'redux';
import companyReducer from './company';

const rootReducer = combineReducers({
  companies: companyReducer,
});

export default rootReducer;
