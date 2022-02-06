import { add, format } from 'date-fns';
import Br from 'date-fns/locale/pt-BR';

export function getPtBrDate(value: string) {
  const wrongDate = new Date(value);
  const date = add(wrongDate, { days: 1 });

  const formattedDate = format(
    date,
    "dd 'de' MMMM'",
    { locale: Br }
  );

  return formattedDate;
}
