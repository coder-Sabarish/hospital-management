import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../../components/navbar";

import "./About.css";

const About = () => {
  return (
    <>
      <Navbar />
      <section id="about">
        <div class="about-1">
          <h1>ABOUT US</h1>
          <p>
            KEC Hospital was inaugurated on 10th September 2015 by
            Thiru.P.Sathiyamoorthy.
          </p>
        </div>
        <div class="about-2">
          <div class="content-box-lg">
            <div class="container">
              <div class="row">
                <div class="col-md-4">
                  <div class="about-item text-center">
                    <h2>MISSION</h2>
                    <hr></hr>
                    <p>
                      Our mission is to provide, maintain & develop Quality
                      services & create a Healthy society.
                    </p>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="about-item text-center">
                    <h2>VISION</h2>
                    <hr></hr>
                    <p>
                      Our vision is to bring Health awareness in society &
                      provide services to all at an affordable cost.
                    </p>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="about-item text-center">
                    <h2>FIRST CORPORATE</h2>
                    <hr></hr>
                    <p>
                      KEC hospital is situated at Poondurai Main Road near to
                      Erode Railway Station, which is major rail route junction
                      of southern railways. Hence, it is most conveniently
                      located to reach by train or bus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer class="text-center">
        <p>Copyright &copy; 2023 All rights reserved by KEC </p>
      </footer>
    </>
  );
};

export default About;
