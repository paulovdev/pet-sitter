import React, { useState } from "react";
import { Rotate as Hamburger } from "hamburger-react";
import { Link } from "react-scroll";

const Nav = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  const menuItems = [
    { target: "about", label: "Sobre nós" },
    { target: "features", label: "Serviços" },
    { target: "contact", label: "Contato" },
  ];

  return (
    <header>
      <nav id="header">
        <Hamburger
          color="#fff"
          duration={0.5}
          toggled={isOpen}
          toggle={toggleMenu}
        />
        <ul className="desktop">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link to={item.target} smooth={true}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <ul className={`mobile ${isOpen ? "open" : ""}`}>
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link to={item.target} smooth={true} onClick={closeMenu}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
