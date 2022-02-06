/* eslint-disable no-unused-vars */
import { IScheduleData } from './IScheduleData';

export interface IPostContext {
  schedulePost: IScheduleData[]
  addSchedule: (data: IScheduleData) => void;
}
