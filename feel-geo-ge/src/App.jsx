import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Main from "./components/Main.jsx";
import SubHeader from "./components/SubHeader.jsx";

import "./App.module.css";

function App() {
  return (
    <div>
      <Header className="header" />
      <SubHeader className="sub" />
      <Main className="main" />
      <Footer className="footer" />
    </div>
  );
}

export default App;
