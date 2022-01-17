import React from "react";
import "./LandingPage.css";
import Navbar from "../components/Navbar";
function LandingPage() {
  return (
    <div>
      <Navbar />
      <div className="body">
        <div className="banner-wrapper">
          <section className="section-one">
            <h1>
              Digital <span>Reasoning</span>
            </h1>
            <div style={{ width: "30rem" }}>
              <p>
                Digital Reasoning is a multidisciplinary corporate
                communication,public relations,perceptionmanagement,and research
                and documentation firm. We are built with a global vision and
                tailored to specific contemporary needs of our clients.
              </p>
            </div>
            <div className="button-group" >
              <button id="button" className="button">
                Contact Us
              </button>
              <button id="button-services" className="button">
                Our Services
              </button>
            </div>
          </section>
        </div>
        <section className="section-two"></section>
      </div>
    </div>
  );
}

export default LandingPage;
