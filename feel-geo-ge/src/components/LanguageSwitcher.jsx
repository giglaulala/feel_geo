import { useTranslation } from "react-i18next";
import styles from "./LanguageSwitcher.module.css";

export default function LanguageSwitcher() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={styles.mainDiv}>
      <h1>{t("welcome")}</h1>
      <div className={styles.btnContainer}>
        <button className={styles.langBtn} onClick={() => changeLanguage("en")}>
          {t("change_language")} (EN)
        </button>
        <button className={styles.langBtn} onClick={() => changeLanguage("ge")}>
          {t("change_language")} (GE)
        </button>
      </div>
    </div>
  );
}
