import React, {useEffect} from "react";
import { navbarMenuAtom } from "./state";
import { useAtom } from "jotai";
import { classNames } from "../../../utils";

function MenuButton() {
  const [isMenuOpen, setIsMenuOpen] = useAtom(navbarMenuAtom);
  useEffect(() => {
      return () => {
          setIsMenuOpen(!isMenuOpen)
      }
  })

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
