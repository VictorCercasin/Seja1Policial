import { createContext } from "react";

export const AuthContext = createContext({
  loginStatus: 'deslogado', //deslogado, logado ou admin
  login: () => {},
  logout: () => {},
});
