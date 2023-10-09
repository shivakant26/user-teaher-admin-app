import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const NormalLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default NormalLayout;
