import { useContext, useState, createContext, ReactNode } from "react";

type AuthProviderProps = {
  children: ReactNode;
};

type AuthContextData = {};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
