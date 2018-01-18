import React from 'react';
import AboutText from './AboutText';
import AboutSlider from './AboutSlider';

const AboutUs =()=>{
  return(
      <div>
        <section className="section-interval about-us-section">
          <div className="content">
            <AboutText/>
            <div className="about-us-block">
              <AboutSlider/>
            </div>
          </div>
        </section>
      </div>
  );
};

export default AboutUs ;