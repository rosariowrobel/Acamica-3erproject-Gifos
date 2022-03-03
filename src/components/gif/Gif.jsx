import React from "react";
import "./gif.css";

export default function Gif(props) {
  return (
    <div className="container-gifs">
      <a href={props.url} target="_blank" rel="noreferrer">
        <img
          className={`gif ${props.Dark ? "dark" : "light"}`}
          src={props.imagen}
          alt={props.titulo}
          width="350px"
          height="300px"
        ></img>
      </a>
    </div>
  );
}
