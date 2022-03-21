import React from "react";
import { Typography } from "@mui/material";
import Calendar from "../Calendar/Calendar";
// import BannerImg from '../../../images/chair.png';
// import '../../Home/Banner/Banner.css';

const AppointmentHeader = ({ date, setDate }) => {
  return (
    <>
      <div className="heder-content">
        <div className="banner-section">
          <div className="container">
            <div className="row items-center">
              <div className="col-md-6 mt-20">
                <Calendar date={date} setDate={setDate} />
              </div>
              <div className="col-md-6 d-none d-md-block offset-1">
                {/* <img className="img" src={BannerImg} alt="banner-img" width="120%" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentHeader;
