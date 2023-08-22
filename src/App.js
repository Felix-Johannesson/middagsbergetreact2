import Home from "./pages/Home";
import Kassa from "./pages/Kassa";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { RootStyles, BodyStyles } from "./components/StyleComponents";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import BackToTopButton from "./components/BackToTopButton";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <BodyStyles />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/kassa.html" element={<Kassa />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
