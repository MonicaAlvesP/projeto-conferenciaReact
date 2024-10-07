import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Home } from "../pages/Home";
import { Speakers } from "../pages/Speakers";
import { Schedule } from "../pages/Schedule";

// Nota: Import do icone do react
import { FaReact } from "react-icons/fa";

export function Navigation() {
  return (
    <Router>
      <nav>
        <h1><FaReact /> React Coders Connect</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/speakers">Palestrantes</Link></li>
          <li><Link to="/schedule">Programação</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/schedule" element={<Schedule />} />
      </Routes>
    </Router>
  );
}