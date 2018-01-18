import React from 'react';

const FeaturesCards =()=> {

  const featuresList = [
    {
      title: "24 hours support",
      text: "containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus"
    },
    {
      title: "Business boosting",
      text: "established fact that a reader will be distracted by the readable content of a page when looking"
    },
    {
      title: "FUll security",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      title: "Creative process",
      text: "There are many variations of passages of Ipsum avail able, but the majority have suffered alteration."
    }
  ];
  return(
    <div>
      <h3 className="title title-section title-dark margin-bottom-60">Our Features</h3>
      <ul className="features-cards flex-between flex-wrap">
        {
          featuresList.map(item => {
            return(
                <li>
                  <h4 className="title title-cards title-dark">{item.title}</h4>
                  <p className="text dark-text">{item.text}</p>
                </li>
            );
          })
        }
      </ul>
      <div className="features-circle">
        <img src="images/logo_icon.png" alt=""/>
      </div>
    </div>
  );
};

export default FeaturesCards;