import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import WhyChoose from "../components/landing/WhyChoose";
import HowItWorks from "../components/landing/HowItWorks";
import WhyTreva from "../components/landing/WhyTreva";
import Testimonials from "../components/landing/Testimonials";
import CTA from "../components/landing/CTA";
import Footer from "../components/landing/Footer";

import "./Landing.css";

const Landing = () => {
  return (
    <div className="landing-page">
      <Navbar/>

      <main>
        <Hero/>
        <WhyChoose/>
        <HowItWorks/>
        <WhyTreva/>
        <Testimonials/>
        <CTA/>
      </main>

      <Footer/>
    </div>
  );
};

export default Landing;
