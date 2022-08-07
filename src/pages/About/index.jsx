import React from "react";
import "./about.css";
import jaleh from "../../assets/images/jaleh-arnhem.jpg"
import salad from "../../assets/images/rainbow-salad.jpg"
const About = () => {
  return (
    <div className="about-container">
        <div className="row">
        <div className="col">
        <p>
          Hi, I'm Jaleh, I love food and traveling, I'm interested in different
          food cultures, and I also have a strong desire to make healthy food.
        </p>
      </div>
      <div className="col">
      <img className="image-about profile" src={jaleh} alt="" />
      </div>
        </div>

      <div className="row">
        <div className="col">
        <img className="image-about salad" src={salad} alt="" />
        </div>
      <div className="col">
      <p>
          You should know that I’m totally obsessed with food. I daydream about
          new recipes. I devour cookbooks. I read up on food policy and
          nutrition. I love photographing food and hope my photos inspire you to
          step into the kitchen to cook a delicious, healthy meal. I hope you
          have fun with my website
        </p>
        
      </div>
      </div>


    </div>
  );
};
export default About;
