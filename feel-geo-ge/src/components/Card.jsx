import styles from "./Card.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <Link
      to={`/card_info/${props.name}`}
      state={{
        img: props.img,
        name: props.name,
        description: props.description,
        price: props.price,
      }}
    >
      <div className={styles.card}>
        <div className={styles.cardImage}>
          <img src={`/${props.img}`} alt={props.name} />
        </div>
        <div className={styles.cardContent}>
          <h3 className={styles.cardName}>{props.name}</h3>
          <p className={styles.cardDescription}>{props.description}</p>
          <p className={styles.cardPrice}>${props.price}</p>
        </div>
      </div>
    </Link>
  );
}

Card.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
};

export default Card;
