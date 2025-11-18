import {differenceInSeconds, format, isValid, parseISO} from 'date-fns';
import {ptBR} from 'date-fns/locale';

type TimeUnit = {
  max: number;
  divisor: number;
  unit: string;
};

const TIME_UNITS: TimeUnit[] = [
  {max: 60, divisor: 1, unit: 's'},
  {max: 3600, divisor: 60, unit: 'm'},
  {max: 86400, divisor: 3600, unit: 'h'},
  {max: 604800, divisor: 86400, unit: 'd'},
  {max: 2628000, divisor: 604800, unit: 'sem'},
  {max: 31536000, divisor: 2628000, unit: 'mês'},
];

function formatRelative(dateISO: string): string {
  try {
    const date = parseISO(dateISO);

    // Valida se a data é válida
    if (!isValid(date)) {
      return 'Data inválida';
    }

    const now = Date.now();
    const diffInSeconds = differenceInSeconds(now, date);

    // Validação de datas futuras
    if (diffInSeconds < 0) {
      return format(date, "dd/MM/yyyy 'às' HH:mm", {locale: ptBR});
    }

    // Encontra a unidade de tempo apropriada
    const timeUnit = TIME_UNITS.find(unit => diffInSeconds < unit.max);

    if (timeUnit) {
      const value = Math.round(diffInSeconds / timeUnit.divisor);
      return `${value}${timeUnit.unit}`;
    }

    // Se passou de um ano
    return format(date, 'dd/MM/yyyy', {locale: ptBR});
  } catch (error) {
    return 'Data inválida';
  }
}

export const dateUtils = {
  formatRelative,
};
