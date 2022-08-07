import React from "react";
import "./Contact.css";
export const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-ways">
        <h2 className="contact-ways-title">Ways of communication</h2>
        <div className="ways">
          <div className="way">
            <span className="title-way">Email: </span>
            <a href="mailto:" className="content-way">
              Jalfood2020@gmail.com
            </a>
          </div>
          <div className="way">
            <span className="title-way">Phone: </span>
            <a href="tel:+316342316" className="content-way">
              +31-6342316
            </a>
          </div>
          <div className="way">
            <span className="title-way">Whatsapp: </span>
            <a href="tel:+316342316" className="content-way">
              +31-6342316
            </a>
          </div>
          <div className="way">
            <span className="title-way">Address: </span>
            <span className="content-way">Kerckacker 11, 5061kp, Oisterwijk</span>
          </div>
        </div>
      </div>

      <div className="contact-form-box">
        <h2 className="contact-title-form">Contact Form</h2>
        <form action="#" method="post">
          <div className="form-group">
            <label>Name: </label>
            <input type="text" name="name" id="name" required />
          </div>

          <div className="form-group">
            <label>Email: </label>
            <input type="email" name="email" id="email" required />
          </div>

          <div className="form-group">
            <label>Subject: </label>
            <input type="text" name="subject" id="subject" required />
          </div>

          <div className="form-group">
            <label>Message: </label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              required
            ></textarea>
          </div>

          <div className="form-group">
            <button type="submit">SEND</button>
          </div>
        </form>
      </div>
    </div>
  );
};
