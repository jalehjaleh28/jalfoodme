
import React from "react";
import Michael from "../asset/michael.jpg";
import Michael2 from "../asset/michael2.jpg";
import "../style/about.css";
export const About = () => {
  return (
    <div className="about-container">
      <div className="top">
        <div className="img-gross">
          <h2>ABOUT</h2>
          <img
            src={Michael}
            alt="Michael"
            sizes="
    (max-width: 500px) calc(100vw - 2rem), 
    (max-width: 700px) calc(100vw - 6rem),
    calc(100vw - 9rem - 200px)"
          />
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
        <div className="text">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos fugiat
          tempora minima unde hic, optio sequi vero sint officia veniam, dolores
          culpa reprehenderit, sed consectetur eligendi dicta! Placeat, fuga
          itaque!
        </p>
        <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos fugiat
          tempora minima unde hic, optio sequi vero sint officia veniam, dolores
          culpa reprehenderit, sed consectetur eligendi dicta! Placeat, fuga
          itaque!
        </p>
        <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos fugiat
          tempora minima unde hic, optio sequi vero sint officia veniam, dolores
          culpa reprehenderit, sed consectetur eligendi dicta! Placeat, fuga
          itaque!
        </p>
          </div>
          
      </div>
    </div>
  );
};
