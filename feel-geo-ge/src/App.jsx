import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Main from "./components/Main.jsx";

import "./App.css";
function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer className="footer" />
    </div>
  );
}

export default App;
