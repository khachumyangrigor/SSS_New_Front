import React, {useEffect} from "react";
import { navbarMenuAtom } from "./state";
import { useAtom } from "jotai";
import { classNames } from "../../../utils";
import "./hideNavbarIcon.css"
function MenuButton() {
  const [isMenuOpen, setIsMenuOpen] = useAtom(navbarMenuAtom);
  useEffect(() => {
      return () => {
          setIsMenuOpen(false)
      }
  },[])

  return (
      <>
        <div className = "wb-hide-icon">
            <div
                className={classNames(
                    isMenuOpen ? "navbar-menu-icon-open" : "",
                    "navbar-menu-icon"
                )}
                onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <span /> <span /> <span />
            </div>
        </div>
      </>

  );
}

export default MenuButton;
