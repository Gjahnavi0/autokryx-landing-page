import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">

        {/* LOGO */}
        <a
          href="#home"
          className="nav-logo"
          onClick={closeMenu}
        >
          <span className="logo-mark">A</span>
          AUTOKRYX
        </a>


        {/* DESKTOP NAVIGATION */}
        <div className="nav-links">

          <a href="#home">
            Home
          </a>

          <a href="#products">
            Products
          </a>

          <a href="#corporate">
            Corporate
          </a>

          <a href="#vision">
            Vision
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@autokryx.in"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-contact"
          >
            Contact
          </a>

        </div>


        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "×" : "☰"}
        </button>

      </nav>


      {/* MOBILE MENU */}
      <div
        className={`mobile-menu ${
          menuOpen ? "active" : ""
        }`}
      >

        <a
          href="#home"
          onClick={closeMenu}
        >
          Home
        </a>

        <a
          href="#products"
          onClick={closeMenu}
        >
          Products
        </a>

        <a
          href="#corporate"
          onClick={closeMenu}
        >
          Corporate
        </a>

        <a
          href="#vision"
          onClick={closeMenu}
        >
          Vision
        </a>

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@autokryx.in"
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
        >
          Contact
        </a>

      </div>
    </>
  );
}

export default Navbar;