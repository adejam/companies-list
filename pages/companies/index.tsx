import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
import styles from '../../styles/Companies.module.css';
import AddBook from '../../components/addCompany';
import { fetchCompany, deleteCompany } from '../../redux/actions/companyAction';
import server from '../../config';
import { GetStaticProps } from 'next';

interface CompaniesProps {
  companiesArray: Array<object>
}

type Company = {
  id: string,
  name: string,
  ceo: string,
  about: string,
}

export const getStaticProps: GetStaticProps = async () => {
  let companiesInArray = [];
  let error = '';
  try {
    const response = await fetch(
      `${server}/api/companies`,
      {
        method: 'GET',
        headers: {
          'User-Agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36',
          Accept: 'application/json; charset=UTF-8',
        },
      },
    );
    companiesInArray = await response.json();
  } catch (e) {
    error = e.toString();
  }
  return {
    props: { companiesArray: companiesInArray, error },
  };
};

const Companies = ({ companiesArray }: CompaniesProps) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCompany(companiesArray));
  }, [fetchCompany]);
  const { companies } = useAppSelector(state => state.companies);
  const handleDelete = (id: string) => {
    dispatch(deleteCompany(id));
  };

  return (
    <>
      <Head>
        <title>Companies List | Lists</title>
      </Head>
      <AddBook />
      <h1 className="ta-center">All Companies</h1>
      {companies.length >= 1 ? (
        companies.map((company: Company) => (
          <Link href={`/companies/${company.id}`} key={company.id}>
            <a className={`${styles.single} d-flex w-full justify-between p-10`}>
              <span>
                <b>{company.name}</b>
              </span>
              <button
                className=" btn btn-danger"
                type="submit"
                onClick={e => {
                  e.preventDefault();
                  handleDelete(company.id);
                }}
              >
                Delete
              </button>
            </a>
          </Link>
        ))
      ) : (
        <div className="ta-center p-10 mt-10 bg-white">
          Company list is empty. Please add a company.
        </div>
      )}
    </>
  );
};

Companies.propTypes = {
  companiesArray: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Companies;
