import React from "react";
import Navbar from "../components/Navbar";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div>
      <Navbar />
      <section className="section-one">
        <h1>Digital</h1>
        <h2>Reasoning</h2>
        <p>
          Digital Reasoning is a multidisciplinary corporate communication,public relations,perceptionmanagement,andresearchanddocumentationfirm. 
          Weare built with a global vision and tailored to specific contemporary needs of our clients.
        </p>
        <button>Contact Us</button>
      </section>
      <section className="section-two">

      </section>
    </div>
  );
}

export default LandingPage;
