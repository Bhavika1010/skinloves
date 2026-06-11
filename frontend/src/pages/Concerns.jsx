import "./Concerns.css";

const concerns = [
  {
    name: "Acne & Breakouts",
    desc: "Clogged pores, inflammation, excess oil, and bacteria can lead to acne. Common forms include whiteheads, blackheads, papules, pustules, and hormonal acne.",
    ingredients: [
      "Salicylic Acid (BHA)",
      "Benzoyl Peroxide",
      "Niacinamide",
      "Tea Tree",
      "Azelaic Acid",
    ],
  },
  {
    name: "Dryness & Dehydration",
    desc: "Dry skin lacks oils, while dehydrated skin lacks water. Both lead to flakiness, tightness, dullness, and rough texture.",
    ingredients: [
      "Hyaluronic Acid",
      "Ceramides",
      "Squalane",
      "Glycerin",
      "Panthenol",
    ],
  },
  {
    name: "Dullness & Uneven Tone",
    desc: "Caused by dead skin buildup, pigmentation, sun exposure, or slow cell turnover. Skin appears tired and lacks radiance.",
    ingredients: [
      "Vitamin C",
      "AHA (Glycolic/Lactic)",
      "Niacinamide",
      "Licorice Extract",
      "Retinol",
    ],
  },
  {
    name: "Pigmentation & Dark Spots",
    desc: "Melanin overproduction due to sun damage, acne marks, hormonal imbalance, or inflammation.",
    ingredients: [
      "Alpha Arbutin",
      "Kojic Acid",
      "Vitamin C",
      "Tranexamic Acid",
      "Niacinamide",
    ],
  },
  {
    name: "Aging & Fine Lines",
    desc: "Loss of collagen, elasticity, and moisture leads to wrinkles, sagging, and dullness.",
    ingredients: [
      "Retinol",
      "Peptides",
      "Hyaluronic Acid",
      "Ceramides",
      "Antioxidants",
    ],
  },
  {
    name: "Sensitivity & Redness",
    desc: "Skin reacts easily to products or weather. Often linked to barrier damage or inflammation.",
    ingredients: [
      "Centella Asiatica",
      "Ceramides",
      "Panthenol",
      "Colloidal Oatmeal",
      "Green Tea",
    ],
  },
  {
    name: "Oily Skin & Large Pores",
    desc: "Excess sebum, clogged pores, and enlarged pores caused by genetics or hormonal imbalance.",
    ingredients: [
      "Niacinamide",
      "BHA (Salicylic Acid)",
      "Clay",
      "Zinc PCA",
      "Retinol",
    ],
  },
  {
    name: "Texture & Roughness",
    desc: "Dead skin buildup and congestion cause uneven skin texture.",
    ingredients: ["AHA", "BHA", "Retinol", "PHA", "Exfoliating Toners"],
  },
  {
    name: "Barrier Damage",
    desc: "Over-exfoliation or harsh products weaken the skin barrier, causing irritation, sensitivity, and redness.",
    ingredients: [
      "Ceramides",
      "Fatty Acids",
      "Cholesterol",
      "Squalane",
      "Panthenol",
    ],
  },
];

export default function Concerns() {
  return (
    <div className="concerns-page">
      <h1 className="concerns-title">Skincare Concerns</h1>
      <p className="concerns-subtitle">
        Understand your skin better — with causes, symptoms, and ingredient
        guides.
      </p>

      <div className="concerns-list">
        {concerns.map((item, index) => (
          <div className="concern-card" key={index}>
            <h2 className="concern-name">{item.name}</h2>
            <p className="concern-desc concern-desc-full">{item.desc}</p>
            <p className="concern-desc concern-desc-short">
              {item.desc.split(".")[0]}.
            </p>
            <h3 className="concern-subheading">Key Ingredients That Help:</h3>
            <ul className="ingredient-list">
              {item.ingredients.map((ing, i) => (
                <li key={i}>{ing}</li>
              ))}
            </ul>
            <button className="concern-btn">View Products</button>
          </div>
        ))}
      </div>
    </div>
  );
}
