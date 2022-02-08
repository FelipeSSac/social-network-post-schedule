import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import usePost from '../../hooks/usePost';

import { SchedulesTable } from '../../components/organisms/SchedulesTable';
import { ModalPortal } from '../../components/molecules/ModalPortal';

import { IScheduleData } from '../../contexts/interfaces/IScheduleData';
import { Container } from './styles';
import { SchedulePreviewModal } from '../../components/organisms/SchedulePreviewModal';

export default function ListSchedules() {
  const { schedulePost } = usePost();

  const [schedules, setSchedules] = useState([] as IScheduleData[]);
  const [selectedSchedule, setSelectedSchedule] = useState({} as IScheduleData);

  const [showModal, setShowModal] = useState(false);
  const [sortedBy, setSortedBy] = useState('none');

  const sortByDate = () => {
    setSchedules((prevState) => {
      const newState = [...prevState];

      newState.sort((a, b) => {
        const aDate = new Date(a.publication_date);
        const bDate = new Date(b.publication_date);

        return aDate.getTime() - bDate.getTime();
      });

      if (sortedBy === 'ASCdate') {
        newState.reverse();

        setSortedBy('DESCdate');

        return newState;
      }

      setSortedBy('ASCdate');

      return newState;
    });
  };

  const sortByStatus = () => {
    setSchedules((prevState) => {
      const newState = [...prevState];

      newState.sort((a, b) => {
        const aStatus = a.status_key;
        const bStatus = b.status_key;

        if (aStatus === bStatus) {
          return 0;
        }

        return aStatus > bStatus ? 1 : -1;
      });

      if (sortedBy === 'ASCstatus') {
        newState.reverse();

        setSortedBy('DESCstatus');

        return newState;
      }

      setSortedBy('ASCstatus');

      return newState;
    });
  };

  const previewSchedule = (schedule: IScheduleData) => {
    setSelectedSchedule(schedule);

    setShowModal(true);
  };

  const ensureSchedules = async () => {
    try {
      const response = await axios.get('../db/schedules.json');
      const data = response?.data?.data || [];

      setSchedules(([
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
      <SchedulesTable
        schedules={schedules}
        previewSchedule={previewSchedule}
        sortByDate={sortByDate}
        sortByStatus={sortByStatus}
      />
      {showModal && (
      <ModalPortal setShowModal={setShowModal}>
        <SchedulePreviewModal schedule={selectedSchedule} />
      </ModalPortal>
      )}
    </Container>
  );
}
