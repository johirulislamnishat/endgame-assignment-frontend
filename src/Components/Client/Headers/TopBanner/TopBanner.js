import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./TopBanner.css";

const TopBanner = () => {
  return (
    <>
      <Carousel showThumbs={false} autoPlay={2000} infiniteLoop={true}>
        <div id="myCarousel" class="carousel slide">
          <div class="carousel-middle">
            <div class="item active">
              <div
                class="fill"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80')",
                }}
              >
                <div class="carousel-caption">
                  <h2 class="animated fadeInLeft">
                    Best Medical Service In the World!!!
                  </h2>
                  <p class="animated fadeInUp">
                    The best-known type of hospital is the general hospital,
                    which typically has an emergency department to treat urgent
                    health problems ranging from fire and accident victims to a
                    heart attack.
                  </p>
                  <p class="animated fadeInUp">
                    <Link
                      to="/appointments"
                      class="btn btn-transparent btn-rounded btn-large"
                    >
                      See More
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="myCarousel" class="carousel slide">
          <div class="carousel-inner">
            <div class="item">
              <div
                class="fill"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=853&q=80')",
                }}
              >
                <div class="carousel-caption">
                  <h2 class="animated fadeInDown">Health Care</h2>
                  <p class="animated fadeInUp">
                    The good news is that healthcare content marketing has a
                    very large audience. The bad news is that competition is
                    fierce, and the breadth of potential topics is almost too
                    vast.
                  </p>
                  <p class="animated fadeInUp">
                    <Link
                      to="/appointment"
                      class="btn btn-transparent btn-rounded btn-large"
                    >
                      See More
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="myCarousel" class="carousel slide">
          <div class="carousel-inner">
            <div class="item">
              <div
                class="fill"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1628719749669-44015c344fbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1033&q=80')",
                }}
              >
                <div class="carousel-caption">
                  <h2 class="animated fadeInRight">Emergency OT</h2>
                  <p class="animated fadeInRight">
                    This indicates that there are still topical opportunities
                    for healthcare content marketers that want to go deep in
                    areas that aren’t as well-covered.
                  </p>
                  <p class="animated fadeInRight">
                    <Link
                      to="/appointment"
                      class="btn btn-transparent btn-rounded btn-large"
                    >
                      See More
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </>
  );
};

export default TopBanner;
