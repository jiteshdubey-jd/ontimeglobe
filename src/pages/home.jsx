import Footer from "@/components/static/Footer";
import Hero from "@/components/static/Hero";
import { Navbar } from "@/components/static/Navbar";
import Testimonials from "@/components/static/Testimonials";
import Tutorial from "@/components/static/Tutorial";
import { useEffect, useState } from "react";

const Home = () => {

    const [isSticky, setIsSticky] = useState(false)

  const handleScroll = () => {
    if(window.scrollY > 50) setIsSticky(true)
      else setIsSticky(false)
  }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => {
          window.removeEventListener("scroll", handleScroll)
        }
      })
  return (
    <div className="bg-[#EDF0F3]">
      <Navbar />
      <Hero isSticky={isSticky}/>
      <Tutorial />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
