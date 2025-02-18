import styles from "./SubHeader.module.css";

function SubHeader() {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.mainText}>Feel Geo</div>
      <div className={styles.subText}>with George</div>
    </div>
  );
}

export default SubHeader;
