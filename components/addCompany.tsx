import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Modal from './Modal';
import { addCompany } from '../redux/actions/companyAction';
import CompanyForm from './companyForm';

const AddBook = () => {
  const [values, setValues] = useState({
    id: '',
    name: '',
    ceo: '',
    about: '',
  });
  const dispatch = useDispatch();
  const [modalDisplay, setModalDisplay] = useState(false);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(addCompany(values));
    setValues({
      ...values,
      id: '',
      name: '',
      ceo: '',
      about: '',
    });
    setModalDisplay(false);
  };
  const closeModalHandler = () => setModalDisplay(false);
  return (
    <div className="p-10 mt-10 mb-10">
      <div>
        <button
          type="button"
          className="open-modal-button btn pointer btn-primary"
          onClick={() => setModalDisplay(true)}
        >
          Add Company
        </button>
        <Modal
          modalId="add-company-modal"
          modalDisplay={modalDisplay}
          closeModal={closeModalHandler}
          modalTitle="Add Company"
        >
          <CompanyForm
            submitHandler={e => handleSubmit(e)}
            values={values}
            setValues={setValues}
            id={uuidv4()}
          />
        </Modal>
      </div>
    </div>
  );
};

export default AddBook;
