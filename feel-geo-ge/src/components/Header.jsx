import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
function Header() {
  const { t } = useTranslation();
  return (
    <header>
      <nav>
        <div className={styles.logo}>
          <Link to="/">Feel Geo</Link>
        </div>
        <Link to="/" className={styles.geoText}>
          {t("home")}
        </Link>
        <Link to="/about" className={styles.geoText}>
          {t("about")}
        </Link>
        <Link to="/services" className={styles.geoText}>
          {t("services")}
        </Link>
        <Link to="/contact" className={styles.geoText}>
          {t("contact")}
        </Link>
      </nav>
    </header>
  );
}

export default Header;
