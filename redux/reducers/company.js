import {
  FETCH_COMPANY_SUCCESS,
  ADD_COMPANY_SUCCESS,
  DELETE_COMPANY_SUCCESS,
} from '../actionTypes/companyActionTypes';

import companies from '../../data';

const companyReducer = (state = { companies }, action) => {
  console.log(action.payload);
  switch (action.type) {
    case FETCH_COMPANY_SUCCESS:
      return {
        ...state,
        companies: action.payload,
      };
    case ADD_COMPANY_SUCCESS:
      return {
        ...state,
        companies: [action.payload, ...state.companies],
      };
    case DELETE_COMPANY_SUCCESS:
      return {
        ...state,
        companies: state.companies.filter(company => company.id !== action.payload),
      };
    default:
      return state;
  }
};

export default companyReducer;
