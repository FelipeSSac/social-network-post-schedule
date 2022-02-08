interface ISchedulePreview {
  id: string;
  social_network_key: string[];
  media?: string | File;
  text: string;
  publication_date: string;
  status_key: number;
  publication_day: string;
  publication_time: string;
  mediaUrl?: string;
  status: string;
}

export interface IInstagramPreviewProps {
  formData?: ISchedulePreview;
}
