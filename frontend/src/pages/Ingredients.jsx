import "./Ingredients.css";

const ingredientGroups = [
  {
    id: 1,
    label: "Exfoliating & Brightening Actives",
    ingredients: [
      "AHA",
      "BHA",
      "Willow Bark Extract",
      "Alpha Arbutin",
      "Benzoyl Peroxide",
      "Vitamin C",
      "Turmeric Extract",
    ],
  },
  {
    id: 2,
    label: "Hydration Boosters",
    ingredients: [
      "Hyaluronic Acid",
      "Glycerin",
      "Urea",
      "Snail Mucin",
      "Fermented Rice Water",
    ],
  },
  {
    id: 3,
    label: "Soothing & Anti-Redness",
    ingredients: [
      "Chamomile Extract",
      "Aloe Vera",
      "Centella Asiatica",
      "Green Tea Extract",
      "Mugwort Extract",
      "Oat Extract",
      "Rose Water",
    ],
  },
  {
    id: 4,
    label: "Nourishing & Barrier Repair",
    ingredients: [
      "Ceramides",
      "Shea Butter",
      "Squalane",
      "Honey Extract",
      "Propolis Extract",
      "D-Panthenol (Vitamin B5)",
      "Vitamin E",
    ],
  },
  {
    id: 5,
    label: "Anti-Aging & Skin Renewal",
    ingredients: [
      "Retinol",
      "Ginseng",
      "Peptides",
      "Collagen",
      "Probiotic Complex",
    ],
  },
  {
    id: 6,
    label: "Oil Control & Pore Care",
    ingredients: ["Niacinamide", "Witch Hazel", "Caffeine"],
  },
  {
    id: 7,
    label: "Brightening Botanicals",
    ingredients: ["Licorice Extract", "Rice Bran Extract"],
  },
];

function Ingredients() {
  return (
    <div className="ingredients-page">
      <header className="ingredients-header">
        <h1 className="ingredients-title">Ingredient Library</h1>
        <p className="ingredients-subtitle">
          Explore key actives used in SkinLoves routines — grouped by how they
          care for your skin. Tap into what each ingredient family can do for
          your barrier, glow, and overall skin health.
        </p>
      </header>

      <main className="ingredient-groups-grid">
        {ingredientGroups.map((group) => (
          <section key={group.id} className="ingredient-group">
            <div className="ingredient-group-header">
              <h2 className="ingredient-group-title">{group.label}</h2>
            </div>

            <div className="ingredient-cards-grid">
              {group.ingredients.map((name) => (
                <article key={name} className="ingredient-card">
                  <h3 className="ingredient-name">{name}</h3>
                </article>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default Ingredients;
