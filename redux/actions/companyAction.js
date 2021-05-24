import {
  FETCH_COMPANY_SUCCESS,
  ADD_COMPANY_SUCCESS,
  DELETE_COMPANY_SUCCESS,
} from '../actionTypes/companyActionTypes';
import companies from '../../data';

const fetchCompanySuccess = companies => ({ type: FETCH_COMPANY_SUCCESS, payload: companies });
const addCompanySuccess = values => ({ type: ADD_COMPANY_SUCCESS, payload: values });
const deleteCompanySuccess = id => ({ type: DELETE_COMPANY_SUCCESS, payload: id });

export const fetchCompany = () => async dispatch => {
  dispatch(fetchCompanySuccess(companies));
};

export const addCompany = values => async dispatch => {
  dispatch(addCompanySuccess(values));
};

export const deleteCompany = id => async dispatch => {
  dispatch(deleteCompanySuccess(id));
};
