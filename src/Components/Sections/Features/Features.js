import React from 'react';
import FeaturesCards from './FeaturesCards';
import FeaturesBoost from './FeaturesBoost';

const Features =()=> {
  return(
    <div>
      <section className="features-interval features-section">
        <div className="content">
          <FeaturesCards/>
          <FeaturesBoost/>
        </div>
      </section>
    </div>    
  );
};

export default Features;