import React from "react";
import AppointmentHome from "../Appointments/AppointmentHome";
import FooterMain from "../Footer/FooterMain";
import Header from "../Headers/Header/Header";
import TopBanner from "../Headers/TopBanner/TopBanner";
import MiddleHospitalInfo from "../HospitalInfo/MiddleHospitalInfo";
import TopHospitalInfo from "../HospitalInfo/TopHospitalInfo";
import Blogs from "../Blogs/Blogs";

const Home = () => {
  return (
    <>
      <Header />
      <TopBanner />
      <TopHospitalInfo />
      <AppointmentHome />
      <MiddleHospitalInfo />
      <Blogs />
      <FooterMain />
    </>
  );
};

export default Home;
