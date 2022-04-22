import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Main = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="d-flex">
      {children}
      </div>
      <Footer />
    </>
  );
};

export default Main;