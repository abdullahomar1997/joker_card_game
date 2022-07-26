import React from "react";
import "./Header.css";
import { AiOutlineFullscreen } from "react-icons/ai";
import { ImMenu3 } from "react-icons/im";
import { AiOutlineRollback } from "react-icons/ai";
import useFullscreenStatus from "../../utils/useFullscreenStatus";

const Header = () => {
  const maximizableElement = React.useRef(null);
  let isFullscreen, setIsFullscreen;
  let errorMessage;

  let backgroundColor = "#efefef";

  try {
    [isFullscreen, setIsFullscreen] = useFullscreenStatus(maximizableElement);
  } catch (e) {
    errorMessage = "Fullscreen not supported";
    isFullscreen = false;
    setIsFullscreen = undefined;
  }

  const handleExitFullscreen = () => document.exitFullscreen();

  return (
    <header className="grid-container">
      <div className="header__icon">
        <ImMenu3 size={"1.5em"} />
      </div>
      <div className="header__icon">
        <AiOutlineRollback size={"1.5em"} />
      </div>

      <div className="header__text">
        <div>Easy</div>
        <div>Score 0</div>
        <div>10:00</div>
      </div>

      <div className="header__icon">
        <AiOutlineFullscreen size={"1.5em"} />
      </div>
    </header>
  );
};

export default Header;
