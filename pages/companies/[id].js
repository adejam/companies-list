import { useEffect, useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleCompany, updateCompany } from '../../redux/actions/companyAction';
import CompanyForm from '../../components/companyForm';
import database from '../../config/database';

const Company = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    id: '',
    name: '',
    ceo: '',
    about: '',
  });
  useEffect(() => {
    let company = {};
    if (typeof window !== 'undefined') {
      const companies = database.getItems();
      company = companies.filter(company => company.id === router.query.id);
    }
    setValues({
      ...values,
      id: company[0].id,
      name: company[0].name,
      ceo: company[0].ceo,
      about: company[0].about,
    });
    dispatch(fetchSingleCompany(router.query.id));
  }, []);
  const { company } = useSelector(state => state.companies);
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateCompany(values));
  };
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
      <div className="mt-10">
        <CompanyForm
          submitHandler={e => handleSubmit(e)}
          values={values}
          setValues={setValues}
          id={values.id}
        />
      </div>
    </section>
  );
};

export default Company;
