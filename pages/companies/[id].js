import PropTypes from 'prop-types';
import Head from 'next/head';
import Link from 'next/link';
import server from '../../config';

export const getStaticPaths = async () => {
  const response = await fetch(`${server}/api/companies`);
  const data = await response.json();

  // map data to an array of path objects with params (id)
  const paths = data.map(company => ({
    params: { id: company.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async context => {
  const { id } = context.params;
  const response = await fetch(`${server}/api/companies/${id}`);
  const data = await response.json();

  return {
    props: { company: data },
  };
};

const Company = ({ company }) => (
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

Company.propTypes = {
  company: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Company;