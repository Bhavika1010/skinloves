import { useState } from "react";
import "./Brands.css";

const brands = {
  A: ["Avene", "Aqualogica", "Axis-Y", "Aroma Magic", "Aveeno", "Aminu"],
  B: ["Bioderma", "Biotique", "Beplain", "Benton", "Brinton Healthcare"],
  C: ["CeraVe", "COSRX", "Clinique", "Cetaphil", "Cipla Derma"],
  D: ["Dermaco", "Dr. Sheths", "Dot & Key", "Dr. Jart+", "Dermadew"],
  E: ["Earth Rhythm", "Etude House", "EltaMD", "Eucerin", "Episoft"],
  F: ["Foxtale", "Face Shop", "Forest Essentials", "Fixderma", "FCL"],
  G: ["Garnier", "Goodal", "Globus Remedies", "Glyco 6", "GNC"],
  H: ["Hada Labo", "Himalaya", "Honest Beauty", "Hyphen", "Himalaya Pharma"],
  I: ["Innisfree", "Isntree", "iS Clinical", "Inatur", "Ipca Pharma"],
  J: [
    "Juicy Chemistry",
    "Just Herbs",
    "Jovees",
    "Joy",
    "Johnson & Johnson",
  ],
  K: [
    "Kama Ayurveda",
    "Kiehl's",
    "Klairs",
    "Keya Seth",
    "Korean Beauty Co.",
  ],
  L: ["La Roche-Posay", "L'Oreal", "Laneige", "Lakme", "Lotus Herbals"],
  M: ["Minimalist", "Mamaearth", "Moisturex", "Murad", "Melaglow"],
};

const alphabet = Object.keys(brands);

export default function Brands() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBrands = Object.entries(brands).reduce((acc, [letter, list]) => {
    const match = list.filter((b) =>
      b.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (match.length > 0) acc[letter] = match;
    return acc;
  }, {});

  return (
    <div className="brands-page">
      <div className="brand-search-box">
        <input
          type="text"
          placeholder="Search Brands..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="brand-search-input"
        />
      </div>

      <div className="brands-layout">
        <div className="brand-list">
          {Object.entries(filteredBrands).map(([letter, list]) => (
            <div key={letter} id={letter} className="brand-group">
              <h2 className="brand-letter">{letter}</h2>
              <div className="letter-line" />
              {list.map((brand, index) => (
                <p key={index} className="brand-name">
                  {brand}
                </p>
              ))}
            </div>
          ))}
          {Object.keys(filteredBrands).length === 0 && (
            <p className="no-brands">No brands found for "{searchTerm}"</p>
          )}
        </div>

        <div className="alphabet-sidebar">
          {alphabet.map((letter) => (
            <a key={letter} href={`#${letter}`} className="alphabet-item">
              {letter}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
