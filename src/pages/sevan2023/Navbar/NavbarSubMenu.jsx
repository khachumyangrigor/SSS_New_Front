import { useAtom, useAtomValue } from "jotai";
import React from "react";
import { Link } from "react-scroll";
import { navbarMenuAtom, navbarScrollAtom } from "./state";
import { classNames } from "../../../utils";

const menuItems = [
  {
    link: `credo`,
    title: "Our Credo",
  },
  {
    link: `wb-applyBlock`,
    title: "Apply as a Startup",
  },
  {
    link: `wb-volunteeringBlock`,
    title: "Become a Volunteer",
  },
  {
    link: `upcommingPrograms`,
    title: "Our Programme",
  },
  {
    link: `firstPageFootter`,
    title: "How to reach us",
  },
  {
    link: `upcommingProgramsBlock`,
    title: "Important to know",
  },
];

function NavbarSubMenu() {
  const [isMenuOpen, setIsMenuOpen] = useAtom(navbarMenuAtom);
  const scrollPosition = useAtomValue(navbarScrollAtom);

  const isNavMenuFixed = scrollPosition >= 400;

  return (
    <div
      style={{ display: isMenuOpen ? "flex" : "none" }}
      className={classNames(isNavMenuFixed ? "subMenu-fix" : "", "subMenu")}>
      <ul>
        {menuItems.map((menuItem, index) => (
          <li key={index}>
            <Link
              onClick={() => setIsMenuOpen(false)}
              smooth={true}
              offset={-150}
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
