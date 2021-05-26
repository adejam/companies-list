import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
import styles from '../../styles/Companies.module.css';
import AddBook from '../../components/addCompany';
import { fetchCompany, deleteCompany } from '../../redux/actions/companyAction';
import server from '../../config';

export const getStaticProps = async () => {
  const response = await fetch(`${server}/api/companies`);
  const companiesInArray = await response.json();

  return {
    props: { companiesArray: companiesInArray },
  };
};

const Companies = ({ companiesArray }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCompany(companiesArray));
  }, [fetchCompany]);
  const { companies } = useSelector(state => state.companies);
  const handleDelete = id => {
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
        companies.map(company => (
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
