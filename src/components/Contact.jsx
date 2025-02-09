import React from "react";
// import "./Contact.css";

function Contact() {
  return (
    <div className="container contact" style={{ marginTop: "150px", marginBottom: "100px" }}>
      <h2 className="main-title text-center" >CONTACT</h2>
      <div className="contact-inner" style={{width:"80%", margin: "0 auto"}}>

        <div className="col-md-12">
          <div className="row">
            {/* First Name */}
            <div className="col-md-4 mb-1">
              <input name="firstName" placeholder="First Name" className="contact-input" />
            </div>

            {/* Last Name */}
            <div className="col-md-4 mb-1">
              <input name="lastName" placeholder="Last Name" className="contact-input" />
            </div>

            {/* Email ID */}
            <div className="col-md-4 mb-1">
              <input name="email" type="email" placeholder="Email ID" className="contact-input" />
            </div>
          </div>

          <div className="row">
            {/* Contact Number */}
            <div className="col-md-4 mb-1">
              <input name="contactNo" type="tel" placeholder="Contact No." className="contact-input" />
            </div>

            {/* Company Name */}
            <div className="col-md-4 mb-1">
              <input name="companyName" placeholder="Company Name" className="contact-input" />
            </div>

            {/* Industry - Dropdown Menu */}
            <div className="col-md-4 mb-1">
              <select name="industry" className="contact-input">
                <option value="" disabled selected>Select Industry</option>
                <option value="IT">IT</option>
                <option value="Finance">Finance</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Education">Education</option>
                <option value="Manufacturing">Manufacturing</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
        </div>

        {/* Message Box */}
        <br />
        <div className="col-md-12">
          <textarea name="message" placeholder="Message" className="contact-textarea" />
        </div>

        {/* Submit Button */}
        <br />
        <div className="row">
          <div className="col-md-12">
            <input className="form-btn" type="submit" value="Send Message" />
          </div>
        </div>

      </div>


    </div>
  );
}

export default Contact;
