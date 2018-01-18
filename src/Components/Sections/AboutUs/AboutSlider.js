import React from 'react';

const AboutSlider =()=>{

    const aboutSliderImg = [
      {
        imgLink: "images/about-logos/logo1.png"
      },
      {
        imgLink: "images/about-logos/logo2.png"
      },
      {
        imgLink: "images/about-logos/logo3.png"
      },
      {
        imgLink: "images/about-logos/logo4.png"
      },
      {
        imgLink: "images/about-logos/logo5.png"
      }
    ];

  return(
      <div>
        <ul className="about-us-slider">
          {
            aboutSliderImg.map(item => {
              return(
                  <li><a href=""><img src={item.imgLink} alt=""/></a></li>
              );
            })
          }
        </ul>
      </div>
  );
};

export default AboutSlider;