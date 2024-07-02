import React from "react";
import { useAtom } from "jotai";
import { Link } from "react-scroll";
import { navbarMenuAtom } from "./state";

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
    link: `upcommingPrograms`,
    title: "Our Program",
  },
  // {
  //   link: `wb-volunteeringBlock`,
  //   title: "Become a Volunteer",
  // },
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

  return (
    <div
      style={{ display: isMenuOpen ? "flex" : "none" }}
      className="subMenu subMenu-fix"
    >
      <ul>
        {menuItems.map((menuItem, index) => (
          <li key={index}>
            <Link
              onClick={() => setIsMenuOpen(false)}
              smooth={true}
              offset={-100}
              spy={true}
              to={menuItem.link}
              duration={1200}
            >
              {menuItem.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavbarSubMenu;
