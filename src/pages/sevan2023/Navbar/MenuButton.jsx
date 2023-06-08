import React from "react";
import { navbarMenuAtom } from "./state";
import { useAtom } from "jotai";
import { classNames } from "../../../utils";

function MenuButton() {
  const [isMenuOpen, setIsMenuOpen] = useAtom(navbarMenuAtom);

  return (
    <div
      className={classNames(
        isMenuOpen ? "navbar-menu-icon-open" : "",
        "navbar-menu-icon"
      )}
      onClick={() => setIsMenuOpen(!isMenuOpen)}>
      <span /> <span /> <span />
    </div>
  );
}

export default MenuButton;
