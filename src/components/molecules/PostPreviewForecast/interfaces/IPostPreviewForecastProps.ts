import { IScheduleFormData } from '../../../../pages/NewSchedule/interfaces/IScheduleFormData';
import { IPostPreviewItemsKeys } from './IPostPreviewItems';

export interface IPostPreviewForecastProps {
  socialNetwork: IPostPreviewItemsKeys;
  formData: IScheduleFormData;
}
