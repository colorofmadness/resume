import dayjs from 'dayjs';
import ru from 'dayjs/locale/ru';

dayjs.locale(ru);

const dateFormat = (
  date: Date | string | number | undefined | null,
  format: string = 'DD.MM.YYYY HH:mm'
): string => {
  if (!date) {
    return '';
  }

  const parsedDate = dayjs(date);
  if (!parsedDate.isValid()) {
    return '';
  }

  return parsedDate.format(format);
};

export default dateFormat;
