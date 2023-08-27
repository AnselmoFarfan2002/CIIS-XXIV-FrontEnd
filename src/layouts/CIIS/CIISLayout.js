import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

const CIISLayout = (props) => {
  return (
    <>
      <Header />
      <div>{props.children}</div>
      <Footer />
    </>
  );
};

export default CIISLayout;
