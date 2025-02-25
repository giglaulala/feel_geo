import { useParams, useLocation } from "react-router-dom";

function CardInfo() {
  const { name } = useParams(); // Get name from URL
  const location = useLocation(); // Get passed state

  if (!location.state) {
    return <h2>Card not found</h2>;
  }

  const { img, description, price } = location.state;

  return (
    <div>
      <h2>{name}</h2>
      <img src={img} alt={name} />
      <p>{description}</p>
      <p>Price: ${price}</p>
    </div>
  );
}

export default CardInfo;
