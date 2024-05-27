/**
 * Tipo para definir os parâmetros aceitos nas rotas de uma aplicação de navegação com abas.
 */
type RootTabParamList = {
  /** Página inicial. */
  Home: undefined;
  /** Serviços. */
  Services: undefined;
  /** Serviços concluídos. */
  Completed: undefined;
  /** Perfil do usuário. */
  Profile: undefined;
  // Adicione tipagem para os parâmetros, se necessário
};

export { RootTabParamList };
