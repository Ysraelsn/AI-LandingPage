import React from "react";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const Navbar = () => {
  const { t } = useTranslation();
  const [navOpen, setNavOpen] = useState(false);
  const navItems = [
    { label: t("Home"), link: "#home", id: "home" },
    { label: t("Features"), link: "#", id: "about" },
    { label: t("Experience"), link: "#", id: "experience" },
    { label: t("Discover"), link: "#", id: "work" },
  ];
  return (
    <div className="container nav_content">
      <div className="bar">
        <div className="logo">
          <h1 className="site-name">AI TECH</h1>
        </div>
        <button
          className="menu-btn"
          onClick={() => setNavOpen((prev) => !prev)}
        >
          <span className="material-symbols-outlined">
            {navOpen ? "close" : "menu"}
          </span>
        </button>
        <nav className={"nav " + (navOpen ? "active" : "")}>
          {navItems.map(({ label, link, id, className }, key) => (
            <a key={key} href={link} className={`nav-link`}>
              {label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
