import React, { useState } from "react";
import "./styles.css";
import Header from "../src/components/header/Header";
import Search from "../src/components/search/Search";
import List from "../src/components/list/List";

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);
  return (
    <div className={`App ${isDark ? "dark" : "light"}`}>
      <div className="viewport">
        <Header isDark={isDark} setIsDark={setIsDark} />
        <Search
          isDark={isDark}
          gifs={gifs}
          setGifs={setGifs}
          setLoading={setLoading}
        />
        <List gifs={gifs} loading={loading} isDark={isDark} />
      </div>
    </div>
  );
}
