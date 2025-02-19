import styles from "./Header.module.css";

function Header() {
  return (
    <header>
      <nav>
        <div className={styles.logo}>
          <link to="/">Feel Geo</link>
        </div>
        <link to="/" className={styles.geoText}>
          მთავარი
        </link>
        <link to="/about" className={styles.geoText}>
          ჩვენს შესახებ
        </link>
        <link to="/services" className={styles.geoText}>
          სერვისები
        </link>
        <link to="/contact" className={styles.geoText}>
          კონტაქტი
        </link>
      </nav>
    </header>
  );
}

export default Header;
