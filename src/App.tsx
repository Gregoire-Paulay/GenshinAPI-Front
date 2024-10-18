import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components

import Footer from "./components/Footer";
import Header from "./components/Header";

// Page
import Home from "./page/Home";
import About from "./page/About";
import Contacts from "./page/Contact";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Contact" element={<Contacts />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
