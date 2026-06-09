import { useState } from "react";
import "./Home.css";
import BYOR from "../components/BYOR";
import TFSn from "../assets/hero/TFSn.jpg";
import BOJn from "../assets/hero/BOJn.jpg";
import sundayrileyn from "../assets/hero/sundayrileyn.jpg";
import pinkn from "../assets/hero/pinkn.jpg";
import CLP from "../assets/hero/CLP.jpg";
import dema from "../assets/hero/dema.jpg";

const slides = [
  { image: TFSn },
  { image: BOJn },
  { image: sundayrileyn },
  { image: pinkn },
  { image: CLP },
  { image: dema },
];

function Home() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="home-page">
      <div className="hero-container">
        <img
          src={slides[current].image}
          alt="Skincare Banner"
          className="hero-image"
        />
        <button className="arrow left" onClick={prevSlide} aria-label="Previous">
          &#8249;
        </button>
        <button className="arrow right" onClick={nextSlide} aria-label="Next">
          &#8250;
        </button>
        <div className="dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === current ? "active" : ""}`}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
      </div>
      <BYOR />
    </div>
  );
}

export default Home;
