import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import Modal from './Modal';

const AddBook = () => {
  const [values, setValues] = useState({
    id: '',
    name: '',
    ceo: '',
    about: '',
  });
  //   const [companies, setCompanies] = useState(companiesArray);
  const handleSubmit = e => {
    e.preventDefault();
    // setCompanies([values, ...companies]);
    setValues({
      ...values,
      id: '',
      name: '',
      ceo: '',
      about: '',
    });
  };
  return (
    <div className="p-10 mt-10 mb-10">
      <div>
        <button
          type="button"
          data-target="add-company-modal"
          className="open-modal-button btn btn-primary"
        >
          Add Company
        </button>
        <Modal modalId="add-company-modal" modalTitle="Add Company">
          <form onSubmit={handleSubmit}>
            <div className="form-group titleInputDiv mb-10">
              <input
                type="text"
                className="form-control w-full"
                id="company-name"
                name="name"
                placeholder="Enter Company Name"
                value={values.name}
                onChange={e => setValues({ ...values, id: uuidv4(), name: e.target.value })}
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
                onChange={e => setValues({ ...values, id: uuidv4(), ceo: e.target.value })}
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
                onChange={e => setValues({ ...values, id: uuidv4(), about: e.target.value })}
                required
              />
            </div>
            <div className="my-10">
              <button type="submit" className="btn d-block btn-primary w-full mx-auto">
                Submit
              </button>
            </div>
          </form>
        </Modal>
      </div>
    </div>
  );
};

export default AddBook;
