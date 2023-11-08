import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header";
import Login from "@/components/Login";
import { useAuth } from "@/context/auth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const CIISLayout = (props) => {
  const [login, setLogin] = useState(false);
  const router = useRouter();
  const { logged } = useAuth();

  useEffect(() => {
    if (!logged && router.query.next) setLogin(true);
  }, [router.query.next]);

  return (
    <>
      <Header onLogin={() => setLogin(true)} />
      <div>{props.children}</div>
      <Footer />
      <Login open={login} onClose={() => setLogin(false)} />
    </>
  );
};

export default CIISLayout;
