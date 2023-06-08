import { useAtom, useAtomValue } from "jotai";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { classNames } from "../../../utils/index";
import MenuButton from "./MenuButton.jsx";
import NavButtons from "./NavButtons.jsx";
import NavbarMenu from "./NavbarMenu.jsx";
import NavbarSubMenu from "./NavbarSubMenu.jsx";
import { navbarMenuAtom, navbarScrollAtom } from "./state";

import "./styles.css";

const Navbar = () => {
  const isMenuOpen = useAtomValue(navbarMenuAtom);
  const [scrollPosition, setScrollPosition] = useAtom(navbarScrollAtom);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setScrollPosition(currentPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isNavbarFixed = scrollPosition >= 820;

  return (
    <div className={classNames(isNavbarFixed ? "navbar-fixed" : "", "navbar")}>
      <div className="navbar-left">
        <Link to="/">
          <img src={require("../img/tent.png")} alt="HOME" />
        </Link>
      </div>
      <div className="navbar-center">
        <NavbarMenu />
      </div>
      <div className={classNames("navbar-right")}>
        <NavButtons />
        <MenuButton />
      </div>
      <div className={isMenuOpen ? "navbar-menu-box" : "navbar-menu-closed"}>
        <NavbarMenu />
      </div>
      <NavbarSubMenu />
    </div>
  );
};

export default Navbar;
