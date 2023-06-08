import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import * as Scroll from "react-scroll";

const menuItems = [
  { link: "/events", title: "Events" },
  { link: "/about-us", title: "About us" },
  { link: "/partners", title: "Partners" },
  { link: "/blog", title: "Blog" },
  { link: "/merch", title: "Merch" },
  { link: "", title: "Contacts" },
];

function NavbarMenu() {
  return (
    <ul className="navbar-menu-buttons">
      {menuItems.map((item, i) => (
        <Fragment key={`menu-item-${i}`}>
          {item.title !== "Contacts" ? (
            <li>
              <Link to={item.link}>{item.title}</Link>
            </li>
          ) : (
            <Scroll.Link
              to="firstPageFootter"
              smooth={true}
              offset={-150}
              spy={true}
              duration={1200}>
              {item.title}
            </Scroll.Link>
          )}
        </Fragment>
      ))}
    </ul>
  );
}

export default NavbarMenu;
