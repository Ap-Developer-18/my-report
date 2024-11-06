import React from "react";
import Hero from "../components/home/Hero";
import MoneyManager from "../components/home/MoneyManager";
import Roadmap from "../components/home/Roadmap";
import ChooseUs from "../components/home/ChooseUs";
import Benefit from "../components/home/Benefit";
import ContactUs from "../components/home/ContactUs";
import ScrollTop from "./../components/common/ScrollTop";
import Footer from "./../components/home/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <MoneyManager />
      <Roadmap />
      <ChooseUs />
      <Benefit />
      <ContactUs />
      <Footer />
      <ScrollTop />
    </>
  );
};

export default Home;