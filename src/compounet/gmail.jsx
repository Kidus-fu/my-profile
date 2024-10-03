import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_mfqnqk2", // Your EmailJS service ID
        "template_qgb3eur", // Your EmailJS template ID
        formData,
        "rbdDW_W2j54GdWvYF" // Your EmailJS user ID (from the dashboard)
      )
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
        },
        (error) => {
          console.log("Email sending failed", error.text);
        }
      );

    // Reset the form after submission
    setFormData({ name: "", email: "", message: "" });
  };

  return (

    <>
<section class="bg-dark py-3 py-md-5">
  

  <div class="container">
    <div class="row gy-3 gy-md-4 gy-lg-0 align-items-xl-center">
      <div class="col-12 col-lg-6">
        <img class="img-fluid rounded" loading="lazy" src="https://files.oaiusercontent.com/file-ffZOtdSKwBvTruwW9ORdf8VD?se=2024-10-03T22%3A15%3A33Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dd3c02b7a-67bc-4c49-bb42-3d34d6d24a6d.webp&sig=etoDBa%2B5zpZYsTImns20Uf5PTkPxpIqNgVvVE1Un9Eo%3D" alt="Get in Touch" />
      </div>
      <div class="col-12 col-lg-6">
        <div class="row justify-content-xl-center">
          <div class="col-12 col-xl-11">
            <div class="bg-white border rounded shadow-sm overflow-hidden">

              <form onSubmit={sendEmail}>
                <div class="row gy-4 gy-xl-5 p-4 p-xl-5">
                  <div class="col-12">
                  <label>Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            required
          />
                  </div>
                  <div class="col-12 ">
                    <label for="email" class="form-label">Email <span class="text-danger">*</span></label>
                    <div class="input-group">
                      <span class="input-group-text">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                        </svg>
                      </span>
                      
          <input
            type="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required
          />
                    </div>
                  </div>
                 
                  
                  <div class="col-12">
                    <label for="message" class="form-label">Message <span class="text-danger">*</span></label>
                    <textarea class="form-control" id="message" name="message" rows="3"  value={formData.message}
            onChange={handleChange} required></textarea>
                  </div>
                  <div class="col-12">
                    <div class="d-grid">
                      <button class="btn btn-dark btn-lg" type="submit">Send Message</button>
                    </div>
                  </div>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
   
    
    </>


  );
};

export default ContactForm;
