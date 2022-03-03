import React from "react";
import Gif from "../gif/Gif";
import notfound from "../../img/error404.jpeg";
import "./list.css";

let apiKey = "bxRI9Ex7INBt12hrXtIsvEjXCd81s50T";
let url = `https://api.giphy.com/v1/gifs/trending?api_key=bxRI9Ex7INBt12hrXtIsvEjXCd81s50T`;

export default function List({ gifs, loading, isDark }) {
  return (
    <div className={`container-list ${isDark ? "dark" : "light"}`}>
      {loading ? (
        <p>Loading...</p>
      ) : gifs.length > 0 ? (
        gifs.map((item) => {
          return (
            <Gif
              Dark={isDark}
              imagen={item.images.downsized.url}
              key={item.id}
              titulo={item.title}
              url={item.url}
              ancho={item.width}
            />
          );
        })
      ) : (
        <img width="100%" src={notfound} alt="error 404" />
      )}
    </div>
  );
}
