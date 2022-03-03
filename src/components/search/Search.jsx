import React, { useState, useEffect } from "react";
import "./search.css";
import ilustra from "../../img/ilustra_header.svg";
import logoSearch from "../../img/icon-search-mod-noc.svg";
import { Hint } from "react-autocomplete-hint";
import axios from "axios";

export default function Search({ isDark, gifs, setGifs, setLoading }) {
  const [userSearch, setUserSearch] = useState("");
  const [url, setUrl] = useState(
    "https://api.giphy.com/v1/gifs/trending?api_key=bxRI9Ex7INBt12hrXtIsvEjXCd81s50T&limit=15"
  );
  const [HintData, setHintData] = useState([]);

  const traerGifs = () => {
    setLoading(true);
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.data.length === 0) {
          setLoading(false);
        }
        return setGifs(data.data);
      })
      .catch(() => {        
      });
  };

  const getData = async () => {
    const res = await axios.get(
      `https://api.giphy.com/v1/gifs/search/tags?api_key=bxRI9Ex7INBt12hrXtIsvEjXCd81s50T&q=${userSearch}&limit=15`
    );
    var hintArray = [];

    res.data.data.map((a) => hintArray.push(a.name));
    setHintData(hintArray);
  };

  useEffect(() => {
    if (gifs.length >= 0) {
      setLoading(false);
    }
  }, [gifs]);

  useEffect(() => {
    setUrl(
      `https://api.giphy.com/v1/gifs/search?api_key=bxRI9Ex7INBt12hrXtIsvEjXCd81s50T&q=${userSearch}&limit=15`
    );
    getData();
  }, [userSearch]);

  useEffect(() => {
    traerGifs();
  }, []);

  return (
    <div className="container-search">
      <div className="container-title">
        <p className={`sentence-inspirate ${isDark ? "dark" : "light"}`}>
          ¡Inspirate y busca los mejores Gifos!
        </p>
      </div>
      <div className="container-icon-search-bar">
        <div className="container-image">
          <img className="image" src={ilustra} alt="icono" />
        </div>
        <div className="input-wrapper">
          <div className="rah-input-wrapper">
            <Hint options={HintData} allowTabFill>
              <input
                type="text"
                id="barra"
                onChange={(e) => setUserSearch(e.target.value)}
                value={userSearch}
                placeholder="Busca gifs"
              />
            </Hint>
          </div>
          <button
            className="button-search"
            type="button"
            id="button"
            onClick={traerGifs}
          >
            <img width="12px" src={logoSearch} alt="busqueda" />
          </button>
        </div>
        <div className="container-result">
          <p className={`sentence-result ${isDark ? "dark" : "light"}`}>
            Resultados de la busqueda
          </p>
        </div>
      </div>
    </div>
  );
}
