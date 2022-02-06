export interface IScheduleFormData {
  social_network_key: string[];
  publication_date: string;
  publication_day: string;
  publication_time: string;
  text: string;
  media?: File;
  mediaUrl?: string;
  status: string;
}
