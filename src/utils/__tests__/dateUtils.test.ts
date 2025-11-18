import {dateUtils} from '@utils';
import {add, Duration, formatISO, sub} from 'date-fns';

const MOCKED_NOW = 1696573824333; // 2023-10-06T07:50:24.333Z

function getDateISO(duration: Duration, op?: 'sub' | 'add'): string {
  op = op || 'sub';
  const time =
    op === 'sub' ? sub(Date.now(), duration) : add(Date.now(), duration);
  const timeISO = formatISO(time);

  return dateUtils.formatRelative(timeISO);
}
describe('dateUtils', () => {
  describe('formatRelative', () => {
    beforeAll(() => {
      jest.spyOn(Date, 'now').mockImplementation(() => MOCKED_NOW);
    });

    afterAll(() => {
      jest.clearAllMocks();
    });

    test('should be displayed in seconds if less than 1 minute ago', () => {
      expect(getDateISO({seconds: 30})).toBe('30s');
    });

    test('should be displayed in minutes if less than 1 hour ago', () => {
      expect(getDateISO({minutes: 15})).toBe('15m');
    });

    test('should be displayed in hours if less than 1 day ago', () => {
      expect(getDateISO({hours: 5})).toBe('5h');
    });

    test('should be displayed in days if less than 1 week ago', () => {
      expect(getDateISO({days: 3})).toBe('3d');
    });

    test('should be displayed in weeks if less than 1 month ago', () => {
      expect(getDateISO({weeks: 2})).toBe('2sem');
    });

    test('should be displayed in months if less than 1 year ago', () => {
      expect(getDateISO({months: 6})).toBe('6mês');
    });

    test('should be displayed in date format if more than 1 year ago', () => {
      expect(getDateISO({years: 2})).toBe('06/10/2021');
    });

    test('should display full date format for future dates', () => {
      const formatted = getDateISO({days: 1}, 'add');

      expect(formatted).toMatch(/\d{2}\/\d{2}\/\d{4} às \d{2}:\d{2}/);
      expect(formatted).toContain('07/10/2023');
    });

    test('should return error message for invalid date', () => {
      expect(dateUtils.formatRelative('invalid-date')).toBe('Data inválida');
    });

    test('should return error message for empty string', () => {
      expect(dateUtils.formatRelative('')).toBe('Data inválida');
    });
  });
});
