import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router';
import { v4 as uuid } from 'uuid';

import { ModalPortal } from '../../components/molecules/ModalPortal';
import { SuccessScheduleModal } from '../../components/molecules/SuccessScheduleModal';
import { NewScheduleForm } from '../../components/organisms/NewScheduleForm';
import usePost from '../../hooks/usePost';

import { IScheduleFormData } from './interfaces/IScheduleFormData';
import { Container } from './styles';

export default function NewSchedule() {
  const navigate = useNavigate();
  const { addSchedule } = usePost();

  const [showModal, setShowModal] = useState(false);

  const [scheduleFormData, setScheduleFormData] = useState({
    social_network_key: [] as string[],
    publication_date: '',
    publication_day: '',
    publication_time: '',
    text: '',
    media: undefined,
    mediaUrl: undefined,
    status: '',
  } as IScheduleFormData);

  const callback = () => {
    navigate('/listSchedules');
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    addSchedule({
      id: uuid(),
      social_network_key: scheduleFormData.social_network_key,
      publication_date:
      `${scheduleFormData.publication_date}T${scheduleFormData.publication_time}`,
      text: scheduleFormData.text,
      media: scheduleFormData.mediaUrl,
      status_key: '1',
    });

    setShowModal(true);
  };

  return (
    <Container>
      <NewScheduleForm
        formData={scheduleFormData}
        setFormData={setScheduleFormData}
        onSubmit={onSubmit}
      />
      {showModal && (
        <ModalPortal
          setShowModal={setShowModal}
          callback={callback}
        >
          <SuccessScheduleModal />
        </ModalPortal>
      )}
    </Container>
  );
}
