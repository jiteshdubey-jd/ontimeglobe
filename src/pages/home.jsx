import About from "@/components/static/About";
import Companies from "@/components/static/Companies";
import Footer from "@/components/static/Footer";
import Hero from "@/components/static/Hero";
import { Navbar } from "@/components/static/Navbar";
import Services from "@/components/static/Services";
import Testimonials from "@/components/static/Testimonials";
import Tutorial from "@/components/static/Tutorial";
import HowItWorks from "@/components/static/HowItWorks";

const Home = () => {
  return (
    <div className="bg-[#EDF0F3]">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Companies />
      <HowItWorks />
      <Tutorial />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
