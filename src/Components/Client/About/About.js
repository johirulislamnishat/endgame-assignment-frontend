import React, { useEffect } from "react";
import Footer from "../Footer/FooterMain";
import Header from "../Headers/Header/Header";
import MiddleHospitalInfo from "../HospitalInfo/MiddleHospitalInfo";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      <MiddleHospitalInfo />
      <Footer />
    </div>
  );
};

export default About;
