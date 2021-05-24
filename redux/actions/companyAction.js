import {
  FETCH_COMPANY_SUCCESS,
  ADD_COMPANY_SUCCESS,
  DELETE_COMPANY_SUCCESS,
  FETCH_COMPANY_FAILURE,
} from '../actionTypes/companyActionTypes';

const fetchCompanySuccess = company => ({ type: FETCH_COMPANY_SUCCESS, payload: company });
export const addCompanySuccess = values => ({ type: ADD_COMPANY_SUCCESS, payload: values });
export const fetchCompanyFailure = companyError => ({
  type: FETCH_COMPANY_FAILURE,
  payload: companyError,
});
export const deleteCompanySuccess = id => ({ type: DELETE_COMPANY_SUCCESS, payload: id });

export const fetchCompany = () => async dispatch => {
  dispatch(fetchCompanySuccess());
};
