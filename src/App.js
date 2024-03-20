import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";

// Layout
import Layout from "./layout/Layout";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Landing from "pages/Landing";
import Booking from "pages/Booking";
import CarSingle from "pages/CarSingle";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="/about" element={<About />} />
      <Route path="/landing" element={<Landing />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/car-single" element={<CarSingle />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
