import { format } from 'date-fns';
import Br from 'date-fns/locale/pt-BR';

export function ensureDateTimePtBr(value: string) {
  const date = new Date(value);

  const formattedDate = format(
    date,
    "dd'/'MM'/'yyyy 'às' HH:mm'h",
    { locale: Br }
  );

  return formattedDate;
}
