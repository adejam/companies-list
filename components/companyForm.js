import PropTypes from 'prop-types';

const CompanyForm = ({
  submitHandler, values, setValues, id,
}) => {
  const handlesubmit = e => {
    e.preventDefault();
    submitHandler(e);
  };
  return (
    <form onSubmit={handlesubmit}>
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
          rows="3"
          placeholder="About Company"
          value={values.about}
          onChange={e => setValues({ ...values, id, about: e.target.value })}
          required
        />
      </div>
      <div className="my-10">
        <button type="submit" className="btn d-block btn-primary w-full mx-auto">
          Submit
        </button>
      </div>
    </form>
  );
};

CompanyForm.propTypes = {
  values: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    ceo: PropTypes.string,
    about: PropTypes.string,
  }),
  setValues: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  ceo: PropTypes.string,
  about: PropTypes.string,
  submitHandler: PropTypes.func.isRequired,
};

CompanyForm.defaultProps = {
  values: {},
  name: '',
  ceo: '',
  about: '',
};

export default CompanyForm;
