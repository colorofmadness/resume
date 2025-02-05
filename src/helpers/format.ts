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

const declOfNum = (number: number, titles: Array<string>): string => {
  const cases = [2, 0, 1, 1, 1, 2];

  return titles[
    number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]
  ];
};

export { dateFormat, declOfNum };
