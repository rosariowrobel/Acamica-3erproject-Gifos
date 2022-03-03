import React from "react";
import "./header.css";
import logo from "../../img/logo-desktop.svg";

export default function Header({ isDark, setIsDark }) {
  const click = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="container-header">
      <div className="container-logo-button">
        <img
          className="logo"
          src={logo}
          alt="icono-gifos"
          width="10%"
          height="50px"
        />
        <button
          onClick={click}
          className={`button-modo-night ${isDark ? "light" : "dark"}`}
        >{`Modo ${isDark ? "Ligth" : "Dark"}`}</button>
      </div>
    </div>
  );
}
