
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Development from "./pages/Development";
import Photography from "./pages/Photography";
import Contact from "./pages/Contact";

import "./App.css";

function NotFound() {
  return (
    <main style={{ padding: "150px 7%", textAlign: "center" }}>
      <h1>404</h1>
      <p>Sorry, this page could not be found.</p>
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/development" element={<Development />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
