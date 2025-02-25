import { useParams, useLocation } from "react-router-dom";

function CardInfo() {
  const { name } = useParams();
  const location = useLocation();

  if (!location.state) {
    return <h2>Card not found</h2>;
  }

  const { img, description, price } = location.state;
  const imgSrc = img && img.startsWith("/") ? img : `/${img}`;

  return (
    <div>
      <h2>{name}</h2>
      <img src={imgSrc} alt={name} />
      <p>{description}</p>
      <p>Price: ${price}</p>
    </div>
  );
}

export default CardInfo;
