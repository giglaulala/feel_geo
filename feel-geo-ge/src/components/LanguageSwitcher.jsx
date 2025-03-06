import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="mainDiv">
      <h1>{t("welcome")}</h1>
      <button className="langBtn" onClick={() => changeLanguage("en")}>
        {t("change_language")} (EN)
      </button>
      <button className="langBtn" onClick={() => changeLanguage("ge")}>
        {t("change_language")} (GE)
      </button>
    </div>
  );
}
