import React, { useState } from "react";
import Footer from "../Footer/FooterMain";
import Header from "../Headers/Header/Header";
import AppointmentHeader from "../Appointments/AppointmentHeader/AppointmentHeader";
import AvailableAppointment from "../Appointments/AvailableAppointment/AvailableAppointment";

const Appointment = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <Header />
      <AppointmentHeader date={date} setDate={setDate} />
      <AvailableAppointment date={date} />
      <Footer />
    </div>
  );
};

export default Appointment;
