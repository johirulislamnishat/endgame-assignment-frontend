import React, { useState } from "react";
import CardActions from "@mui/material/CardActions";
import BookingModal from "../BookingModal/BookingModal";
import Rating from "react-rating";

const Booking = ({ appointment, date }) => {
  //modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
        <div class="relative pb-48 overflow-hidden">
          <img
            class="absolute inset-0 w-full"
            src={appointment.img}
            alt={appointment.name}
          />
        </div>
        <div class="p-4">
          <span class="inline-block px-2 py-1 leading-none bg-green-200 text-yellow-800 rounded-full font-semibold uppercase tracking-wide text-xs">
            {appointment.department}
          </span>
          <h2 class="mt-2 mb-2  font-bold text-xl">
            {appointment.name} ||{" "}
            <span className="text-sm">{appointment.education}</span>
          </h2>
          <p class="text-base">
            Designation: <span>{appointment.designation}</span>
          </p>
          <p class="text-base">
            Chamber: <span>{appointment.chamber}</span>
          </p>
          <p class="text-base">
            Time: <span>{appointment.time}</span>
          </p>
          <div class="mt-3 flex items-center justify-between">
            <div>
              <span class="text-sm font-semibold">৳</span>&nbsp;
              <span class="font-semibold text-base">{appointment.fees}</span>
            </div>
            <Rating
              initialRating={appointment.rating}
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
          <CardActions sx={{ display: "flex", justifyContent: "center" }}>
            <input
              onClick={handleOpen}
              className="btn btn-secondary my-2 cursor-pointer w-full"
              type="submit"
              value="Book Appointment"
            />
          </CardActions>
        </div>
      </div>

      <div>
        <BookingModal
          name={appointment.name}
          // time={time}
          date={date}
          open={open}
          handleClose={handleClose}
          appointment={appointment}
        ></BookingModal>
      </div>
    </>
  );
};

export default Booking;
