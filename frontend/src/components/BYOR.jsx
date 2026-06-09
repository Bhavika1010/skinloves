import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Sun, Moon } from "lucide-react";
import "./BYOR.css";
import { morningRoutine, nightRoutine } from "../data/routines";

function BYOR() {
  const navigate = useNavigate();
  const [selectedRoutine, setSelectedRoutine] = useState("morning");
  const currentSteps =
    selectedRoutine === "morning" ? morningRoutine : nightRoutine;

  return (
    <section className="byor-container">
      <h2 className="byor-title">Build Your Routine</h2>
      <div className="byor-tabs">
        <button
          className={`byor-tab ${selectedRoutine === "morning" ? "active" : ""}`}
          onClick={() => setSelectedRoutine("morning")}
        >
          <Sun size={16} strokeWidth={2} />
          Morning Routine
        </button>
        <button
          className={`byor-tab ${selectedRoutine === "night" ? "active" : ""}`}
          onClick={() => setSelectedRoutine("night")}
        >
          <Moon size={16} strokeWidth={2} />
          Night Routine
        </button>
      </div>
      <div className="byor-steps">
        {currentSteps.map((item) => (
          <div
            key={item.step}
            className="byor-step-card"
            onClick={() => navigate(`/category/${item.link}`)}
            style={{ cursor: "pointer" }}
          >
            <div className="byor-step-header">
              <h3>
                Step {item.step}: <span>{item.title}</span>
              </h3>
            </div>
            <p className="byor-step-description">{item.desc}</p>
          </div>
        ))}
      </div>
      <button className="byor-shop-all" onClick={() => navigate("/products")}>
        Shop All Products
      </button>
    </section>
  );
}

export default BYOR;
