import "./Pharma.css";

const pharmaBrands = [
  {
    name: "Cipla",
    desc: "A trusted pharmaceutical company offering dermatologist-approved skincare formulations.",
    products: ["Cipla Excela", "Cutisoft Lotion", "Saslic DS Cleanser"],
  },
  {
    name: "Brinton Healthcare",
    desc: "Science-backed skincare solutions for acne, pigmentation, and barrier repair.",
    products: ["AcneOC Cleanser", "UV Doux Sunscreen", "Exfoliate+ Face Wash"],
  },
  {
    name: "Episoft",
    desc: "Gentle, dermat-formulated cleansers and moisturizers suitable for sensitive skin.",
    products: ["Episoft Cleansing Lotion", "Episoft Moisturizer"],
  },
  {
    name: "FCL (Fixderma)",
    desc: "Advanced cosmeceutical skincare targeting anti-aging, hydration, and pigmentation.",
    products: ["FCL Vitamin C Serum", "FCL Hydra Boost", "FCL B Prox 10"],
  },
  {
    name: "Hyalugel",
    desc: "Lightweight, oil-free gel moisturizer ideal for oily and acne-prone skin.",
    products: ["Hyalugel Plus Gel"],
  },
  {
    name: "Dermadew",
    desc: "Dermatologist-trusted gentle moisturizers and soaps for hydrated skin.",
    products: ["Dermadew Aloe Cream", "Dermadew Soap"],
  },
];

export default function Pharma() {
  return (
    <div className="pharma-page">
      <h1 className="pharma-title">Pharma Skincare</h1>
      <p className="pharma-subtitle">
        Dermatologist-approved skincare brands for acne, pigmentation,
        sensitivity, and barrier repair.
      </p>

      <div className="pharma-list">
        {pharmaBrands.map((brand, index) => (
          <div className="pharma-card" key={index}>
            <h2 className="pharma-name">{brand.name}</h2>
            <p className="pharma-desc">{brand.desc}</p>
            <h3 className="pharma-subheading">Popular Products</h3>
            <ul className="pharma-products">
              {brand.products.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
            <button className="pharma-btn">View Products</button>
          </div>
        ))}
      </div>
    </div>
  );
}
