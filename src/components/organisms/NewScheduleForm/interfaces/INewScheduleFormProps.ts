/* eslint-disable no-unused-vars */
import { Dispatch, FormEvent, SetStateAction } from 'react';

import { IScheduleFormData } from '../../../../pages/NewSchedule/interfaces/IScheduleFormData';

export interface INewScheduleFormProps {
  formData: IScheduleFormData;
  setFormData: Dispatch<SetStateAction<IScheduleFormData>>;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}
