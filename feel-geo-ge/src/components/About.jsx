import styles from "./About.module.css";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <div className={styles.mainDiv}>
      <h1>{t("about")}</h1>
      <div className={styles.mainText}>{t("abouttext")}</div>
    </div>
  );
}

export default About;
