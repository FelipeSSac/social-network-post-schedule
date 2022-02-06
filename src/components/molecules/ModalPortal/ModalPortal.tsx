import { cloneElement, useRef, useState } from 'react';
import { useOutside } from '../../../hooks/useOutside';

import { IModalPortalProps } from './interfaces/IModalPortalProps';
import { Container } from './styles';

export default function ModalPortal({
  children,
  setShowModal,
  callback,
}: IModalPortalProps) {
  const modalRoot = document.getElementById('modal-root');

  const modalContainer = useRef(null);

  const [closeModal, setCloseModal] = useState(false);

  const handleCloseModal = () => {
    setCloseModal(true);

    setTimeout(() => {
      setShowModal(false);

      if (callback) {
        callback();
      }
    }, 300);
  };

  if (!modalRoot) {
    return null;
  }

  useOutside(modalContainer, handleCloseModal);

  return (
    <Container close={closeModal}>
      {cloneElement(children, {
        ref: modalContainer,
        closeModal: handleCloseModal
      })}
    </Container>
  );
}
