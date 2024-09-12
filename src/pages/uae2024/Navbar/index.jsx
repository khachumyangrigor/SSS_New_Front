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
import "../myStyles.css"

const Navbar = () => {
  const isMenuOpen = useAtomValue(navbarMenuAtom);
  const navbarRef = useRef(null);
  const [navBarZeroPoint, setNavbarZeroPoint] = useAtom(navbarZeroPointAtom);
  const [initialPosition, setInitialPosition] = useState(null);
  const  handelScrollIntoView = () => {
     window.scroll({
            top: document.body.scrollHeight,
            left: 0,
            behavior: 'smooth'
     });
  }

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
      <div className="firstPageHeaderMiddle">
        <ul>
           <li><Link  to="/events">Events</Link></li>
           <li><Link  to="/about-us">About us</Link></li>
           <li><Link  to="/partners">Partners</Link></li>
           <li><Link  to="/merch">Merch</Link></li>
           <li><Link  to="/blog">Blog</Link></li>
           <li onClick={handelScrollIntoView}>Contact</li>
        </ul>
      </div>
      {/*<div className="navbar-center">*/}
      {/*  <NavbarMenu />*/}
      {/*</div>*/}
      <div className={classNames("navbar-right")}>
        <NavButtons isSaleOpen={true}/>
      </div>
        <div>
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
