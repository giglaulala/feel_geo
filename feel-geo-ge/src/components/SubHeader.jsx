import styles from "./SubHeader.module.css";
import { useState, useEffect } from "react";

function SubHeader() {
  const [timePicture, setTimePicture] = useState(null);

  useEffect(() => {
    const date = new Date();
    setTimePicture(date.getHours());
  }, []);
  console.log(timePicture);
  return (
    <div
      style={
        timePicture > 19 || timePicture < 8
          ? { backgroundImage: `url("/tbilisi-at-night.jpeg")` }
          : { backgroundImage: `url("/tbilisi.jpg")` }
      }
      className={styles.mainDiv}
    >
      <div className={styles.mainText}>Feel Geo</div>
      <div className={styles.subText}>with George</div>
    </div>
  );
}

export default SubHeader;
