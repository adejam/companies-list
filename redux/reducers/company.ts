import {
  FETCH_COMPANY_SUCCESS,
  ADD_COMPANY_SUCCESS,
  DELETE_COMPANY_SUCCESS,
  FETCH_SINGLE_COMPANY_SUCCESS,
} from '../actionTypes/companyActionTypes';
import { RootState } from '../store';

interface Company {
  id: string
}

const company = {};
const companies: object[] = [];

const companyReducer = (state: RootState = { company, companies }, action: any) => {
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
        companies: state.companies.filter( (company: Company) => company.id !== action.payload),
      };
    default:
      return state;
  }
};

export default companyReducer;
