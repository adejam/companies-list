import Head from 'next/head';
import styles from '../../styles/Companies.module.css';
import Link from 'next/link';
import { server } from '../../config'

export const getStaticProps = async () => {
  const response = await fetch(`${server}/api/companies`);
  const companiesInArray = await response.json();

  return {
    props: { companies: companiesInArray },
  };
};

const Companies = ({ companies }) => {
  return (
    <>
      <Head>
        <title>Companies List | Lists</title>
      </Head>
      <h1 className="ta-center">All Companies</h1>
      {companies.map((company) => (
        <Link href={'/companies/' + company.id} key={company.id}>
          <a className={styles.single + ' p-10'}>
            <h3>{company.name}</h3>
          </a>
        </Link>
      ))}
    </>
  );
};

export default Companies;
