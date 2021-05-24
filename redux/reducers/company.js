import {
  FETCH_COMPANY_SUCCESS,
  ADD_COMPANY_SUCCESS,
  DELETE_COMPANY_SUCCESS,
  FETCH_COMPANY_FAILURE,
} from '../types/companyActionTypes';

import companies from '../../data';

const companyReducer = (state = companies, action) => {
  switch (action.type) {
    case FETCH_COMPANY_SUCCESS:
      return {
        ...state,
        company: {},
        companies: action.payload,
      };
    case FETCH_COMPANY_FAILURE:
      return {
        company: {},
        companies: action.payload.companies,
      };
    case ADD_COMPANY_SUCCESS:
      return {
        ...state,
        companies: state.companies.concat(action.payload),
      };
    case DELETE_COMPANY_SUCCESS:
      return {
        ...state,
        companies: state.companies.filter(company => company.bookId !== action.payload),
      };
    default:
      return state;
  }
};

export default companyReducer;
