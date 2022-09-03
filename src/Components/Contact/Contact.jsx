import React from "react";
import { useNavigate } from "react-router-dom";
import "./Contact.css";

function Contact() {
  const navigate = useNavigate();
  return (
    <div>
      <section className="containerContact">
        <div className="contact">
          <button className="contact_btn" onClick={() => navigate("/")}>
            <i class="bx bx-chevrons-left"></i>
          </button>
        </div>
        <div className="contact-info">
          <div className="contact_details">
            <p>Get in touch</p>
            <h1>Visit our Offline store or contact us today!</h1>
            <h2>Store</h2>
            <p>
              <i class="bx bxs-map"></i>561 wellington Road, Street 32, San
              Francisco
            </p>
            <p>
              <i class="bx bxs-envelope"></i>bliss24@.com
            </p>
            <p>
              <i class="bx bxs-phone-call"></i>+01 2222 546
            </p>
            <p>
              <i class="bx bxs-time"></i> 10:00 - 18:00. Mon-Sat
            </p>
          </div>
          <div className="contact_form">
            <input type="text" placeholder="Enter your Name" />
            <input type="email" placeholder="Enter your Email" />
            <input type="text" placeholder="Enter the subject" />
            <textarea
              name=""
              id=""
              cols="30"
              rows="15"
              placeholder="Your Message"
            ></textarea>
            <button className="btn">Submit</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
