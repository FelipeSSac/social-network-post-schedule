/* eslint-disable no-unused-vars */
import { IScheduleData } from '../../../../contexts/interfaces/IScheduleData';

export interface ISchedulesTableProps{
  schedules: IScheduleData[];
  previewSchedule: (schedule: IScheduleData) => void;
  sortByDate: () => void;
  sortByStatus: () => void;
}
