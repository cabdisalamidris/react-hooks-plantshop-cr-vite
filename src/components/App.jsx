import { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function App() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then((data) => setPlants(data));
  }, []);

  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }

  function handleToggleStock(id) {
    const updatedPlants = plants.map((plant) =>
      plant.id === id
        ? { ...plant, inStock: !plant.inStock }
        : plant
    );

    setPlants(updatedPlants);
  }

  const displayedPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />

      <Search
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      <PlantList
        plants={displayedPlants}
        onToggleStock={handleToggleStock}
      />
    </main>
  );
}

export default App;