import database from '../../config/database';
import {
  FETCH_COMPANY_SUCCESS,
  ADD_COMPANY_SUCCESS,
  DELETE_COMPANY_SUCCESS,
  FETCH_SINGLE_COMPANY_SUCCESS,
} from '../actionTypes/companyActionTypes';

const fetchCompanySuccess = companies => ({ type: FETCH_COMPANY_SUCCESS, payload: companies });
const addCompanySuccess = values => ({ type: ADD_COMPANY_SUCCESS, payload: values });
const deleteCompanySuccess = id => ({ type: DELETE_COMPANY_SUCCESS, payload: id });

const fetchSingleCompanySuccess = company => ({
  type: FETCH_SINGLE_COMPANY_SUCCESS,
  payload: company,
});

export const fetchCompany = currentCompanies => async dispatch => {
  let companiesToStore;
  if (typeof window !== 'undefined') {
    if (!database.getItems()) {
      database.setItemToDatabase(currentCompanies);
    }
    companiesToStore = database.getItems();
  } else {
    companiesToStore = currentCompanies;
  }
  dispatch(fetchCompanySuccess(companiesToStore));
};

export const addCompany = values => async dispatch => {
  if (typeof window !== 'undefined') {
    const companies = database.getItems();
    companies.push(values);
    database.setItemToDatabase(companies);
  }
  dispatch(addCompanySuccess(values));
};

export const deleteCompany = id => async dispatch => {
  if (typeof window !== 'undefined') {
    const companies = database.getItems();
    const currentCompanies = companies.filter(company => company.id !== id);

    database.setItemToDatabase(currentCompanies);
    dispatch(deleteCompanySuccess(id));
  }
};

export const fetchSingleCompany = id => async dispatch => {
  if (typeof window !== 'undefined') {
    const companies = database.getItems();
    const company = companies.filter(company => company.id === id);
    dispatch(fetchSingleCompanySuccess(company[0]));
  }
};
