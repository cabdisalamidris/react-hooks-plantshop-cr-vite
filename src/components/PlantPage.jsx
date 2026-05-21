import { useState } from "react";
import NewPlantForm from "./NewPlantForm";

function PlantPage({ plants = [], onAddPlant }) {
  const [search, setSearch] = useState("");
  const [plantList, setPlantList] = useState(plants);

  function handleToggleStock(id) {
    const updatedPlants = plantList.map((plant) =>
      plant.id === id
        ? { ...plant, inStock: !plant.inStock }
        : plant
    );

    setPlantList(updatedPlants);
  }

  const displayedPlants = plantList.filter((plant) =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm onAddPlant={onAddPlant} />

      <input
        type="text"
        placeholder="Search plants..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul className="cards">
        {displayedPlants.map((plant) => (
          <li
            key={plant.id}
            className="card"
            data-testid="plant-item"
          >
            <img src={plant.image} alt={plant.name} />

            <h4>{plant.name}</h4>

            <p>Price: {plant.price}</p>

            <button onClick={() => handleToggleStock(plant.id)}>
              {plant.inStock ? "In Stock" : "Out of Stock"}
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default PlantPage;