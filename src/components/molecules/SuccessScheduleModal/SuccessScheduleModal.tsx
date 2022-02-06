import { forwardRef } from 'react';
import { Button } from '../../atoms/Button';

// @ts-expect-error
import Emoji from '../../../assets/images/success/success-emoji.svg?component';

import { ISuccessScheduleModalProps } from './interfaces/ISuccessScheduleModalProps';
import { Container } from './styles';

const SuccessScheduleModal = forwardRef<
  HTMLDivElement, ISuccessScheduleModalProps
>(({
  closeModal,
}, ref) => (
    <Container ref={ref}>
      <Emoji className="success-schedule-modal__img" />
      <h1 className="success-schedule-modal__title">
        Agendado com sucesso!
      </h1>
      <Button
        className="success-schedule-modal__button"
        onClick={closeModal}
      >
        OK
      </Button>
    </Container>
));

export default SuccessScheduleModal;
