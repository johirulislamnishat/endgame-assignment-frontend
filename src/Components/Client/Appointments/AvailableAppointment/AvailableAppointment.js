import React, { useEffect, useState } from "react";
import Booking from "../Booking/Booking";

const AvailableAppointment = ({ date }) => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const url = "http://localhost:8000/doctors";
    fetch(url)
      .then((res) => res.json())
      // .then(data => console.log(data))
      .then((data) => setAppointments(data));
  }, []);

  return (
    <div className="bg-green-50">
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 md:py-10">
        <h1 className="text-center py-10 font-medium text-2xl text-gray-800">
          Our Specialist Doctors
        </h1>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          <div class="rounded overflow-hidden shadow-md">
            {appointments.map((appointment) => (
              <Booking
                key={appointment._id}
                appointment={appointment}
                date={date}
              ></Booking>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableAppointment;
