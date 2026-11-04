
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import "./Navbar.css";

const navigationLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Development", path: "/development" },
  { name: "Photography", path: "/photography" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* LOGO */}
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          KN<span>.</span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="navbar-links">
          {navigationLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                isActive ? "navbar-link active" : "navbar-link"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* CONTACT BUTTON */}
        <Link to="/contact" className="navbar-cta">
          Let's talk <ArrowUpRight size={15} />
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          className="navbar-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>

      </div>

      {/* MOBILE NAVIGATION */}
      <div className={`navbar-mobile ${menuOpen ? "show" : ""}`}>
        {navigationLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            end={link.path === "/"}
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive
                ? "navbar-mobile-link active"
                : "navbar-mobile-link"
            }
          >
            {link.name}
          </NavLink>
        ))}

        <Link
          to="/contact"
          className="navbar-mobile-cta"
          onClick={closeMenu}
        >
          Let's talk <ArrowUpRight size={16} />
        </Link>
      </div>

    </header>
  );
}
