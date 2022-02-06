import { FormEvent, useState } from 'react';

import { NewScheduleForm } from '../../components/organisms/NewScheduleForm';

import { IScheduleFormData } from './interfaces/IScheduleFormData';
import { Container } from './styles';

export default function NewSchedule() {
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

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(scheduleFormData);
  };

  return (
    <Container>
      <NewScheduleForm
        formData={scheduleFormData}
        setFormData={setScheduleFormData}
        onSubmit={onSubmit}
      />
    </Container>
  );
}
