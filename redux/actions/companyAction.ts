import { Dispatch } from 'redux';
import database from '../../config/database';
import {
  FETCH_COMPANY_SUCCESS,
  ADD_COMPANY_SUCCESS,
  DELETE_COMPANY_SUCCESS,
  FETCH_SINGLE_COMPANY_SUCCESS,
} from '../actionTypes/companyActionTypes';

const fetchCompanySuccess = (companies: object[]) => ({ type: FETCH_COMPANY_SUCCESS, payload: companies });
const addCompanySuccess = (values: object) => ({ type: ADD_COMPANY_SUCCESS, payload: values });
const deleteCompanySuccess = (id: string) => ({ type: DELETE_COMPANY_SUCCESS, payload: id });

const fetchSingleCompanySuccess = (company: object) => ({
  type: FETCH_SINGLE_COMPANY_SUCCESS,
  payload: company,
});

interface Company {
  id: string
  name: string
  ceo: string
  about: string
}

export const fetchCompany = (currentCompanies: object[]) => async (dispatch: Dispatch) => {
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

export const addCompany = (values: object) => async (dispatch: Dispatch) => {
  if (typeof window !== 'undefined') {
    const companies = database.getItems();
    companies.push(values);
    database.setItemToDatabase(companies);
  }
  dispatch(addCompanySuccess(values));
};

export const deleteCompany = (id: string) => async (dispatch: Dispatch) => {
  if (typeof window !== 'undefined') {
    const companies = database.getItems();
    const currentCompanies = companies.filter((company: Company) => company.id !== id);

    database.setItemToDatabase(currentCompanies);
    dispatch(deleteCompanySuccess(id));
  }
};

export const fetchSingleCompany = (id: string | string[] | undefined) => async (dispatch: Dispatch) => {
  if (typeof window !== 'undefined') {
    const companies = database.getItems();
    const company = companies.filter((company: Company) => company.id === id);
    dispatch(fetchSingleCompanySuccess(company[0]));
  }
};

export const updateCompany = (values: Company) => async (dispatch: Dispatch) => {
  if (typeof window !== 'undefined') {
    const companies = database.getItems();
    const company = companies.filter((company: Company) => company.id === values.id);
    company[0].name = values.name;
    company[0].ceo = values.ceo;
    company[0].about = values.about;
    database.setItemToDatabase(companies);
    dispatch(fetchSingleCompanySuccess(company[0]));
  }
};
