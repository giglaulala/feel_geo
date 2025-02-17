import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer>
      <div className={styles.footerContent}>
        <p>&copy; 2025 Feel Geo. All rights reserved.</p>
        <div className={styles.footerLinks}>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact Us</a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
