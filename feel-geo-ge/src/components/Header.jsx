import styles from "./Header.module.css";

function Header() {
  return (
    <header>
      <nav>
        <div className={styles.logo}>
          <a href="">Feel Geo</a>
        </div>
        <a className={styles.geoText} href="">
          მთავარი
        </a>
        <a className={styles.geoText} href="">
          ჩვენს შესახებ
        </a>
        <a className={styles.geoText} href="">
          სერვისები
        </a>
        <a className={styles.geoText} href="">
          კონტაქტი
        </a>
      </nav>
    </header>
  );
}

export default Header;
