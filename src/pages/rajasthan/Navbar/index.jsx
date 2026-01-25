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
import "../myStyles.css";

const Navbar = (props) => {
  const isMenuOpen = useAtomValue(navbarMenuAtom);
  const navbarRef = useRef(null);
  const [navBarZeroPoint, setNavbarZeroPoint] = useAtom(navbarZeroPointAtom);
  const [initialPosition, setInitialPosition] = useState(null);
  const [width, setWidth] = useState(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => setWidth(window.innerWidth);
    const handleScroll = () => {
      if (!navbarRef.current) return;

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

    setWidth(window.innerWidth); // начальная ширина

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [initialPosition, setNavbarZeroPoint]);


  return (
    <div
      ref={navbarRef}
      className={classNames(
        navBarZeroPoint ? "navbar-fixed" : "",
        "navbar sevan2024-navbar"
      )}
    >
      <div className="navbar-left">
        <Link to="/">
          <img src={require("../img/tent.png")} alt="HOME" />
        </Link>
      </div>
      <div className="navbar-center">
        <NavbarMenu />
      </div>
      <div className={"navbar-right"}>
        <NavButtons isSaleOpen={true} openPopup={props.openPopup} />

      </div>
       {/*TODO onlySevan25 start*/}
      {width !== null && width > 1024 && <MenuButton />}
      {/* TODO onlySevan25 end*/}
      <div className={isMenuOpen ? "navbar-menu-box" : "navbar-menu-closed"}>
        <NavbarMenu />
      </div>
      <NavbarSubMenu />
    </div>
  );
};

export default Navbar;
