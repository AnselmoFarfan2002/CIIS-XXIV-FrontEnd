import { createContext, useContext, useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [logged, setLogged] = useState(false);
  const router = useRouter();

  useEffect(() => {
    let sesion = JSON.parse(window.localStorage.getItem("userSession"));

    if (sesion && new Date(sesion.tiempoExpiracion) > new Date()) {
      setUser(sesion);
      setLogged(true);
    } else {
      window.localStorage.removeItem("userSession");
    }
  }, []);

  const login = (email, contrasenia) => {
    let now = new Date();
    now.setHours(now.getHours() + 2);
    let user = {
      name: "Anselmo César",
      lastname: "Farfan Pajuelo",
      role: "user",
      tiempoExpiracion: now,
    };

    window.localStorage.setItem("userSession", JSON.stringify(user));

    setUser(user);
    setLogged(true);
    router.push("/dashboard");
  };

  const logout = () => {
    setUser(null);
    setLogged(false);
    router.push("/");
    window.localStorage.removeItem("userSession");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, logged }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
