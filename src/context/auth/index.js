import { createContext, useContext, useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { abortFetch, fetchPost } from "@/utils/data.fetch";
import { directory } from "../url-context";
import Swal from "sweetalert2";

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

  function createSession(user) {
    Swal.fire("Bienvenido", "Sesión iniciada con éxito", "success");

    let now = new Date();
    now.setHours(now.getHours() + 2);
    window.localStorage.setItem("userSession", JSON.stringify(user));

    setUser(user);
    setLogged(true);
    router.push("/dashboard");
  }

  function csfr(user, dest = "/dashboard") {
    let now = new Date();
    now.setHours(now.getHours() + 2);
    window.localStorage.setItem("userSession", JSON.stringify(user));

    setUser(user);
    setLogged(true);
    router.push(dest);
  }

  const login = (email, password) => {
    fetchPost(
      directory.session.src,
      { email, password },
      createSession,
      abortFetch
    );
  };

  function setInscriptionCiis(inscription) {
    let user2 = { ...user };
    user2.inscriptions = inscription;
    window.localStorage.setItem("userSession", JSON.stringify(user));
    setUser(user2);
  }

  const logout = () => {
    router.push("/");
    setUser(null);
    setLogged(false);
    window.localStorage.removeItem("userSession");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        logged,
        setInscriptionCiis,
        csfr,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
