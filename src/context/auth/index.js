import { createContext, useContext, useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const router = useRouter();

  useEffect(() => {
    let sesion = JSON.parse(window.localStorage.getItem("userSession"));
    if (sesion && sesion.tiempoExpiracion > new Date()) {
      setToken(sesion.token);
      setUser(sesion.user);
    } else window.localStorage.removeItem("userSession");
  }, []);

  const login = (email, contrasenia) => {};

  const logout = () => {};

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
