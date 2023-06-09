import { useAtom, useAtomValue } from "jotai";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { classNames } from "../../../utils/index";
import MenuButton from "./MenuButton.jsx";
import NavButtons from "./NavButtons.jsx";
import NavbarMenu from "./NavbarMenu.jsx";
import NavbarSubMenu from "./NavbarSubMenu.jsx";
import { navbarMenuAtom, navbarZeroPointAtom } from "./state";

import "./styles.css";

const Navbar = () => {
  const isMenuOpen = useAtomValue(navbarMenuAtom);
  const navbarRef = useRef(null);
  const [navBarZeroPoint, setNavbarZeroPoint] = useAtom(navbarZeroPointAtom);
  const [initialPosition, setInitialPosition] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const navbarPosition = navbarRef.current.getBoundingClientRect().top;
      const scrollPosition = window.scrollY;

      if (!initialPosition) {
        setInitialPosition(navbarPosition);
      }

      if (initialPosition && initialPosition <= scrollPosition) {
        setNavbarZeroPoint(true);
      } else {
        setNavbarZeroPoint(false);
      }

      if (scrollPosition <= 0) {
        setInitialPosition(null);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [initialPosition]);

  return (
    <div
      ref={navbarRef}
      className={classNames(navBarZeroPoint ? "navbar-fixed" : "", "navbar")}>
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
