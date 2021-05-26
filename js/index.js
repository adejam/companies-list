import { openModal, closeModal, windowClickCloseModal } from './dom-logics/modal';

if (typeof window !== 'undefined') {
  const openModalButton = document.querySelectorAll('.open-modal-button');
  const closeModalButton = document.querySelectorAll('.close-modal-button');
  if (openModalButton) {
    openModalButton.forEach(btn => {
      btn.addEventListener('click', openModal);
    });
  }

  if (closeModalButton) {
    closeModalButton.forEach(btn => {
      btn.addEventListener('click', closeModal);
    });
  }
  window.addEventListener('click', windowClickCloseModal);
}
