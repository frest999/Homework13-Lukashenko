import React from 'react';
import Header from './Components/Header/Header';
import AboutUs from './Components/Sections/AboutUs/AboutUs';
import Features from './Components/Sections/Features/Features';
import Project from './Components/Sections/Project/Project';
import Services from './Components/Sections/Services';
import Testimonials from './Components/Sections/Testimonials';
import OurBlog from './Components/Sections/OurBlog';
import QuickContact from './Components/Sections/QuickContact';
import Footer from './Components/Footer/Footer';


class App extends React.Component {

  render() {
    return (
        <div>
          <Header/>
          <AboutUs/>
          <Features/>
          <Project/>
          <Services/>
          <Testimonials/>
          <OurBlog/>
          <QuickContact/>
          <Footer/>
        </div>
    )
  }
}

export default App;