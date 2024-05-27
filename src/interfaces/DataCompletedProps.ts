/**
 * Interface que define os dados completados em um determinado período de tempo.
 */
interface DataCompletedProps {
  /** Número de serviços concluídos hoje. */
  today: number;
  /** Número de serviços concluídos na semana atual. */
  week: number;
  /** Número de serviços em andamento. */
  inProgress: number;
  /** Número de serviços cancelados. */
  canceled: number;
}

export { DataCompletedProps };
