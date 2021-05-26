import PropTypes from 'prop-types';
import { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleCompany } from '../../redux/actions/companyAction';

const Company = ({ query }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSingleCompany(query.id));
  }, [fetchSingleCompany]);
  const { company } = useSelector(state => state.companies);
  return (
    <section className="bg-white p-10">
      <Head>
        <title>
          Companies List |
          {company.name}
        </title>
      </Head>
      <h1 className="ta-center">{company.name}</h1>
      <article className="mt-10">
        <p className="ta-center mb-10">
          <b>CEO:</b>
          {company.ceo}
        </p>
        <p className="ta-center">{company.about}</p>
        <Link href="/companies">
          <a className="btn d-block btn-primary my-10 mx-auto">Go back</a>
        </Link>
      </article>
    </section>
  );
};

Company.propTypes = {
  query: PropTypes.objectOf(PropTypes.string).isRequired,
};

Company.getInitialProps = ({ query }) => query;

export default Company;
