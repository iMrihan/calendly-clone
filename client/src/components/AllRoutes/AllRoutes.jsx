import React from "react";
import { Route, Routes } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import Main from "../Home/Main";
import { Navbar } from "../Navbar/Navbar";
import { Individuals } from "../Individuals/Individuals";
import ScrollToTop from "../ScrollTop/ScrollTop";

export const AllRoutes = () => {
  return (
    <div>
      <Navbar />
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/for-individuals" element={<Individuals />} />
        </Routes>
      </ScrollToTop>
      <Footer />
    </div>
  );
};
