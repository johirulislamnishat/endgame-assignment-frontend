import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import "./Appointment.css";
import { NavLink } from "react-router-dom";

const AppointmentHome = () => {
  const [doctors, setDoctors] = useState([]);

  // const { isLoading } = useAuth();

  useEffect(() => {
    const url = "https://rocky-mountain-61787.herokuapp.com/doctors/";
    fetch(url)
      .then((res) => res.json())
      // .then((data) => console.log(data));
      .then((data) => setDoctors(data));
  }, []);

  return (
    <div className="bg-green-50">
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 md:py-10">
        <h1 className="text-center py-10 font-medium text-2xl text-gray-800">
          Our Specialist Doctors
        </h1>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          <div class="rounded overflow-hidden shadow-md">
            {doctors.map((doctor) => (
              <div
                key={doctor._id}
                class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
              >
                <div class="relative pb-48 overflow-hidden">
                  <img
                    class="absolute inset-0 w-full"
                    src={doctor.img}
                    alt={doctor.name}
                  />
                </div>
                <div class="p-4">
                  <span class="inline-block px-2 py-1 leading-none bg-green-200 text-yellow-800 rounded-full font-semibold uppercase tracking-wide text-xs">
                    {doctor.department}
                  </span>
                  <h2 class="mt-2 mb-2  font-bold text-xl">
                    {doctor.name} ||{" "}
                    <span className="text-sm">{doctor.education}</span>
                  </h2>
                  <p class="text-base">
                    Designation: <span>{doctor.designation}</span>
                  </p>
                  <p class="text-base">
                    Chamber: <span>{doctor.chamber}</span>
                  </p>
                  <p class="text-base">
                    Time: <span>{doctor.time}</span>
                  </p>
                  <div class="mt-3 flex items-center justify-between">
                    <div>
                      <span class="text-sm font-semibold">৳</span>&nbsp;
                      <span class="font-semibold text-base">{doctor.fees}</span>
                    </div>
                    <Rating
                      initialRating={doctor.rating}
                      readonly
                      emptySymbol={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-6 w-6 fill-current text-yellow-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                          />
                        </svg>
                      }
                      fullSymbol={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 fill-current text-yellow-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      }
                    />
                  </div>
                </div>

                <div class="p-4 flex items-center text-sm text-gray-600">
                  <NavLink to="/appointment" className="form-btn btn-secondary">
                    Book Now
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentHome;
