import { useDispatch, useSelector } from 'react-redux';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
import styles from '../../styles/Companies.module.css';
import AddBook from '../../components/addCompany';
import { fetchCompany, deleteCompany } from '../../redux/actions/companyAction';

const Companies = () => {
  const { companies } = useSelector(state => state.companies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCompany(companies));
  }, [fetchCompany]);

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
      {companies.length ? (
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

export default Companies;
