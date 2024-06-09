import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="meet-section">
      <div className="text-container">
        <h1 className="title">nice to meet you We</h1>
        <p className="description">
          re John and Jai, co-founders of Hydrant. Our journey started when both us
          (John, a scientist, and Jai, a finance consultant)
          were trying to solve the same problem on opposite sides of the US. After a friend connected us, the rest is history.
        </p>
      </div>
      <div className="image-container">
        <img src="/Cilicia.png" alt="Hydrant co-founders" className="image" />
      </div>
    </section>
  );
};

export default About;
