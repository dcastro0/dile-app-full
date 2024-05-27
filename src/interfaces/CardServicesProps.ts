/**
 * Interface que define as propriedades de um componente de cartão de serviços.
 */
interface CardServicesProps {
  /** Identificador único do serviço. */
  id: number;
  /** Data de criação do serviço. */
  created_at: Date;
  /** Data de criação do serviço (alternativa). */
  date_create: Date;
  /** Nome do serviço. */
  name: string;
  /** Nome do cliente associado ao serviço. */
  name_client: string;
  /** Número de telefone do cliente. */
  phone: string;
  /** Preço do serviço. */
  price: number;
  /** Observação relacionada ao serviço. */
  observation: string;
  /** Progresso do serviço. */
  progress: number;
  /** Indicador se o serviço foi concluído. */
  completed: boolean;
  /** Indicador se o serviço foi arquivado. */
  archived: boolean;
  /** Identificador da categoria do serviço. */
  category_id: number;
  /** Itens resolvidos associados ao serviço. */
  resolved_item: ResolvedItem[];
}

/**
 * Interface que define as propriedades de um item resolvido associado a um serviço.
 */
interface ResolvedItem {
  /** Identificador único do item resolvido. */
  id: number;
  /** Nome do item resolvido. */
  name: string;
  /** Identificador do serviço associado ao item resolvido. */
  services_id: number;
}

export { CardServicesProps, ResolvedItem };
