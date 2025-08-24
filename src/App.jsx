import AboutPage from "./pages/About";
import ProjectListPage from "./pages/ProjectList";
import TechStackPage from "./pages/TechStack";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import './styles/App.css'
import Home from "./pages/Home";
import NavBar from "./components/Navbar";
import Cursor from "./components/cursor";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container } from "react-bootstrap";
import { useEffect } from "react";
import FooterComponent from "./components/Footer";
function App() {
   useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Cursor />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectListPage />} />
            <Route path="/tech-stack" element={<TechStackPage />} />
          </Routes>
        </Container>
        <FooterComponent />
      </BrowserRouter>
     
    </>
  )
}

export default App
