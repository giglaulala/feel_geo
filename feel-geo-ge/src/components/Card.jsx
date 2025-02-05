import "./Card.css"; // Import card styles

function Card(props) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={props.image} alt={props.name} />
      </div>
      <div className="card-content">
        <h3 className="card-name">{props.name}</h3>
        <p className="card-description">{props.description}</p>
        <p className="card-price">${props.price}</p>
      </div>
    </div>
  );
}

export default Card;
