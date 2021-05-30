import PropTypes from 'prop-types';

type Company = {
  id: string,
  name: string,
  ceo: string,
  about: string,
}

interface CompanyFormProps {
  submitHandler: (...args: any[]) => any
  values: Company
  setValues: (...args: any[] ) => any
  id: string
}

const CompanyForm: React.FunctionComponent<CompanyFormProps> = ({
  submitHandler, values, setValues, id,
}) => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    submitHandler(e);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group titleInputDiv mb-10">
        <input
          type="text"
          className="form-control w-full"
          id="company-name"
          name="name"
          placeholder="Enter Company Name"
          value={values.name}
          onChange={e => setValues({ ...values, id, name: e.target.value })}
          required
        />
      </div>
      <div className="form-group titleInputDiv mb-10">
        <input
          type="text"
          className="form-control w-full"
          id="company-ceo-name"
          name="ceo"
          placeholder="Enter Company CEO Name"
          value={values.ceo}
          onChange={e => setValues({ ...values, id, ceo: e.target.value })}
          required
        />
      </div>
      <div className="form-group titleInputDiv mb-10">
        <textarea
          className="form-control w-full"
          id="about-company"
          name="about"
          rows={3}
          placeholder="About Company"
          value={values.about}
          onChange={e => setValues({ ...values, id, about: e.target.value })}
          required
        />
      </div>
      <div className="my-10">
        <input type="submit" value="submit" className="btn d-block btn-primary w-full mx-auto" />
      </div>
    </form>
  );
};

CompanyForm.propTypes = {
  values: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    ceo: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
  }).isRequired,
  setValues: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  submitHandler: PropTypes.func.isRequired,
};

export default CompanyForm;
