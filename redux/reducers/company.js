import {
  FETCH_COMPANY_SUCCESS,
  ADD_COMPANY_SUCCESS,
  DELETE_COMPANY_SUCCESS,
  FETCH_SINGLE_COMPANY_SUCCESS,
} from '../actionTypes/companyActionTypes';

const company = {};
const companies = [];

const companyReducer = (state = { company, companies }, action) => {
  switch (action.type) {
    case FETCH_COMPANY_SUCCESS:
      return {
        ...state,
        company: {},
        companies: (action.payload).reverse(),
      };
    case ADD_COMPANY_SUCCESS:
      return {
        ...state,
        company: {},
        companies: [action.payload, ...state.companies],
      };
    case FETCH_SINGLE_COMPANY_SUCCESS:
      return {
        ...state,
        company: action.payload,
        companies: state.companies,
      };
    case DELETE_COMPANY_SUCCESS:
      return {
        ...state,
        company: {},
        companies: state.companies.filter(company => company.id !== action.payload),
      };
    default:
      return state;
  }
};

export default companyReducer;
