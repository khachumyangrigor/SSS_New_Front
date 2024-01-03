import { useAtom, useAtomValue } from "jotai";
import React from "react";
import { Link } from "react-scroll";
import { navbarMenuAtom, navbarZeroPointAtom } from "./state";
import { classNames } from "../../../utils";

const menuItems = [
  {
    link: `credo`,
    title: "Our Credo",
  },
  {
    link: `wb-participateBlock`,
    title: "Roadmap as a Startup",
  },
  {
    link: `upcommingPrograms`,
    title: "Our Program",
  },
  {
    link: `wb-applyBlock`,
    title: "Become a Volunteer",
  },
  {
    link: `upcommingReach`,
    title: "How to reach us",
  },
  {
    link: `upcommingProgramsBlock`,
    title: "Important to know",
  },
];

function NavbarSubMenu() {
  const [isMenuOpen, setIsMenuOpen] = useAtom(navbarMenuAtom);
  const navbarZeroPoint = useAtomValue(navbarZeroPointAtom);

  return (
    <div
      style={{ display: isMenuOpen ? "flex" : "none" }}
      className={classNames(navbarZeroPoint ? "subMenu-fix" : "", "subMenu")}>
      <ul>
        {menuItems.map((menuItem, index) => (
          <li key={index}>
            <Link
              onClick={() => setIsMenuOpen(false)}
              smooth={true}
              offset={-100}
              spy={true}
              to={menuItem.link}
              duration={1200}>
              {menuItem.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavbarSubMenu;
