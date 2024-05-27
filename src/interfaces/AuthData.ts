/**
 * Interface que define o formato dos dados de autenticação do usuário.
 */
interface AuthData {
  /** Token de autenticação. */
  token: string;
  /** Nome de usuário (opcional). */
  username?: string;
  /** Nome do usuário (opcional). */
  name?: string;
}

export { AuthData };
