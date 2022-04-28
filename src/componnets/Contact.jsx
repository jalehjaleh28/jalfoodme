import React from "react";
import Michael from "../asset/michael.jpg";
import Michael2 from "../asset/michael2.jpg";
import "../style/contact.css";
export const Contact = () => {
  return (
    <div className="about-container">
      <div className="top">
        <div className="contact-text">
          <h2>contact</h2>
          <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores odio quis rerum modi, dolor laudantium veritatis
                minima. Repudiandae, ut! Provident praesentium unde ipsa atque
                blanditiis sit quisquam aut commodi aliquam?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores odio quis rerum modi, dolor laudantium veritatis
                minima. Repudiandae, ut! Provident praesentium unde ipsa atque
                blanditiis sit quisquam aut commodi aliquam?
              </p>
        </div>
        <div className="recht">
          <div className="img-klein">
            <div className="recht-title">
              <h3>Welcome to Jalfood</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores odio quis rerum modi, dolor laudantium veritatis
                minima. Repudiandae, ut! Provident praesentium unde ipsa atque
                blanditiis sit quisquam aut commodi aliquam?
              </p>
            </div>
            <div className="recht-img">
              <img
                src={Michael2}
                alt="Michael"
                sizes="
    (max-width: 500px) calc(100vw - 2rem), 
    (max-width: 700px) calc(100vw - 6rem),
    calc(100vw - 9rem - 200px)"
              />
            </div>
          </div>
          {/* <div className="random"></div> */}
        </div>
      </div>
      <div className="text-container">
        <div className="input">
          <ul>
            <li>
              <label>Name</label>
              <input type="text" name="name" id="name" />
            </li>
            <li>
            <label>Email</label>
              <input type="email" name="email" id="email" />
            </li>
            <li>
            <label>Subject</label>
              <input type="text" name="subject" id="subject" />
            </li>
            <li>
            <label>Message</label>
              <textarea name="message" id="message" cols="30" rows="10"></textarea>
            </li>
            
            <button>SEND</button>
          </ul>
          </div>
          
      </div>
    </div>
  );
};

