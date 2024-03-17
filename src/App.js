import React from "react";

import NavigationBar from "./Components/NavigationBar";
import Banner from "./Components/Banner";
import Features from "./Components/Features";
import Benefit from "./Components/Benefit";
import Client from "./Components/Client";
import Howitsworks from "./Components/Howitsworks";
import CaseStudy from "./Components/CaseStudy";
import ClientTestimonials from "./Components/ClientTestimonials";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <Banner></Banner>
      <Features></Features>
      <Benefit></Benefit>
      <Client></Client>
      <Howitsworks></Howitsworks>
      <CaseStudy></CaseStudy>
      <ClientTestimonials></ClientTestimonials>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
