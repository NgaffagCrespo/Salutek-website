import { useEffect, useState } from "react";
import { NavLink, Link, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";
import { SITE } from "./data.js";

function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]);
  return (
    <header className="header">
      <div className="container header-in">
        <Link to="/" className="logo"><img src={`${import.meta.env.BASE_URL}logo.png`} alt={`${SITE.name} - ${SITE.slogan}`} /></Link>
        <button className="burger" onClick={() => setOpen(!open)} aria-label="Menu">☰</button>
        <nav className={`nav ${open ? "open" : ""}`}>
          <NavLink to="/" end>Accueil</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/contact" className="btn btn-sm">Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-in">
        <div>
          <div className="footer-logo"><img src={`${import.meta.env.BASE_URL}logo.png`} alt={SITE.name} /></div>
          <p>{SITE.slogan}. Vente, installation et maintenance d'onduleurs et de batteries partout au Cameroun.</p>
        </div>
        <div>
          <strong>Contact</strong>
          <p>{SITE.phone}<br />{SITE.email}<br />{SITE.address}</p>
        </div>
        <div>
          <strong>Horaires</strong>
          <p>{SITE.hours}</p>
        </div>
      </div>
      <div className="copy">© {new Date().getFullYear()} {SITE.name}. Tous droits réservés.</div>
    </footer>
  );
}

export default function App() {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
