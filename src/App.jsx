import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/static/Navbar";
import NavbarB from "./components/static/NavbarB";
import Footer from "./components/static/Footer";
import Testimonials from "./components/static/Testimonials";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
            <div className="bg-[#EDF0F3]">
              <Navbar />
              <NavbarB />
              <Testimonials />
              <Footer />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
