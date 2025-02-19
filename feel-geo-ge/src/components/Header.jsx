import styles from "./Header.module.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header>
      <nav>
        <div className={styles.logo}>
          <Link to="/">Feel Geo</Link>
        </div>
        <Link to="/" className={styles.geoText}>
          მთავარი
        </Link>
        <Link to="/about" className={styles.geoText}>
          ჩვენს შესახებ
        </Link>
        <Link to="/services" className={styles.geoText}>
          სერვისები
        </Link>
        <Link to="/contact" className={styles.geoText}>
          კონტაქტი
        </Link>
      </nav>
    </header>
  );
}

export default Header;
