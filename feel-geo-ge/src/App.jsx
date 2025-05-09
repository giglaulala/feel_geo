import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Main from "./components/Main.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Contact from "./components/Contact.jsx";
import CardInfo from "./components/CardInfo.jsx";
import LanguageSwitcher from "./components/LanguageSwitcher.jsx";
import { Routes, Route } from "react-router-dom";
import "./i18n";
import "./App.module.css";

function App() {
  return (
    <div>
      <Header />
      <LanguageSwitcher />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/card_info/:name" element={<CardInfo />} />
      </Routes>
      <Footer className="footer" />
    </div>
  );
}

export default App;
