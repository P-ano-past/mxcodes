import LandingPage from "../LandingPage/LandingPage";
import Blog from "../Blog/Blog";
import About from "../About/About";
import Navigation from "../Nav/Nav";
import Contact from "../Contact/Contact";
import "./App.css";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Container className="App">
      <Navigation />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/Contact" element={<Contact />} />
      </Routes>
    </Container>
  );
}

export default App;
