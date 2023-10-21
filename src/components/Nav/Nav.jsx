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
    { target: "about", label: "Sobre nós", alt: "Ir para Sobre nós" },
    { target: "features", label: "Serviços", alt: "Ir para Serviços" },
    { target: "contact", label: "Contato", alt: "Ir para Contato" },
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
              <Link to={item.target} smooth={true} title={item.alt}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <ul className={`mobile ${isOpen ? "open" : ""}`}>
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.target}
                smooth={true}
                title={item.alt}
                onClick={closeMenu}
              >
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
