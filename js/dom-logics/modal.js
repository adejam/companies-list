export const openModal = ({ currentTarget }) => {
  const {
    dataset: { target },
  } = currentTarget;
  const targetId = target;
  const modal = document.querySelector(`#${targetId}`);
  modal.classList.remove('d-none');
};

export const closeModal = ({ currentTarget }) => {
  const {
    dataset: { dismiss },
  } = currentTarget;
  const targetId = dismiss;
  const modal = document.querySelector(`#${targetId}`);
  modal.classList.add('d-none');
};

export const windowClickCloseModal = ({ target }) => {
  if (target.classList.contains('modal')) {
    target.classList.add('d-none');
  }
};
