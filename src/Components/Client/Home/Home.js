import React from "react";
import AppointmentHome from "../Appointments/AppointmentHome";
import FooterMain from "../Footer/FooterMain";
import Header from "../Headers/Header/Header";
import TopBanner from "../Headers/TopBanner/TopBanner";
import MiddleHospitalInfo from "../HospitalInfo/MiddleHospitalInfo";
import TopHospitalInfo from "../HospitalInfo/TopHospitalInfo";

const Home = () => {
  return (
    <>
      <Header />
      <TopBanner />
      <TopHospitalInfo />
      <AppointmentHome />
      <MiddleHospitalInfo />
      <FooterMain />
    </>
  );
};

export default Home;
