import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import usePost from '../../hooks/usePost';

import { IScheduleData } from '../../contexts/interfaces/IScheduleData';
import { Container } from './styles';
import { SchedulesTable } from '../../components/organisms/SchedulesTable';

export default function ListSchedules() {
  const { schedulePost } = usePost();

  const [schedules, setSchedules] = useState([] as IScheduleData[]);

  console.log(schedules);

  const ensureSchedules = async () => {
    try {
      const response = await axios.get('../db/schedules.json');
      const data = response?.data?.data || [];

      setSchedules((prevState) => ([
        ...prevState,
        ...schedulePost,
        ...data
      ]));
    } catch (error: any) {
      toast.error(error?.response?.data?.message || 'Opps ocorreu um erro ao acessar os dados!');
    }
  };

  useEffect(() => {
    ensureSchedules();
  }, []);

  return (
    <Container>
      <h1 className="list-schedules__title">
        Listagem de agendamento
      </h1>
      <SchedulesTable />
    </Container>
  );
}
