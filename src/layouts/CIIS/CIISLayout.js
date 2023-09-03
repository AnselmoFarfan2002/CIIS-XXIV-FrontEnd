import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header";
import Login from "@/components/Login";
import { useState } from "react";

const CIISLayout = (props) => {
  const [login, setLogin] = useState(false);
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
