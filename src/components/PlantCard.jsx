function PlantCard({ plant, onToggleStock }) {
  const { id, image, name, price, inStock } = plant;

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />

      <h4>{name}</h4>

      <p>Price: {price}</p>

      <button onClick={() => onToggleStock(id)}>
        {inStock ? "In Stock" : "Sold Out"}
      </button>
    </li>
  );
}

export default PlantCard;