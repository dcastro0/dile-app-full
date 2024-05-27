/**
 * Interface que define as propriedades de um componente de cartão de completude.
 */
interface CardCompletedProps {
  /** Identificador único do cartão. */
  id: number;
  /** Nome associado ao cartão. */
  name: string;
  /** Data relacionada ao cartão. */
  data: string;
}

export { CardCompletedProps };
