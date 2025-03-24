import dayjs from 'dayjs';
import ru from 'dayjs/locale/ru';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.locale(ru);
dayjs.extend(relativeTime);

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

const getTimeForm = (value: number, unit: 'mount' | 'year') => {
  const titles = unit === 'year' ? ['год', 'года', 'лет'] : ['месяц', 'месяца', 'месяцев'];

  return `${value} ${declOfNum(value, titles)}`;
};

const getWorkTime = (startDate: Date, endDate: Date = new Date()) => {
  const start = dayjs(startDate);
  const end = dayjs(endDate);

  const years = end.diff(start, 'year');

  const months = end.subtract(years, 'year').diff(start, 'month');

  const adjustedYears = years + (months >= 0 ? 0 : -1);
  const adjustedMonths = months >= 0 ? months + 1 : months + 12;

  const parts = [];

  if (adjustedYears > 0) {
    parts.push(getTimeForm(adjustedYears, 'year'));
  }

  if (adjustedMonths > 0) {
    parts.push(getTimeForm(adjustedMonths, 'mount'));
  }

  if (adjustedYears === 0 && adjustedMonths === 12) {
    return '1 год';
  }

  return parts.length > 0 ? parts.join(' ') : '0 лет';
};

export { dateFormat, declOfNum, getWorkTime };
