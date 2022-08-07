import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { Link } from 'react-router-dom';
import "./KitchenMobile.css";

const KitchenMobile = ({ showMenu }) => {
  const [fetch, setFetch] = useState([]);
  const api = async () => {
    const res = await axios.get(
      "https://themealdb.com/api/json/v1/1/list.php?a=list"
    );
    setFetch(res.data.meals);
  };
  useEffect(() => {
    api();
  }, []);

  const showData = fetch.map((item) => {
    return (
      <li className="datakeukenmobile" key={item.strArea}>
        <Link
          onClick={() => showMenu()}
          to={`/search/kitchen/${item.strArea}`}
          key={item.strArea}
          className="mobile-link"
        >
          <span>{item.strArea}</span>
        </Link>
      </li>
    );
  });
  return (
    <>
      <ul className="keukenulmobile">{showData}</ul>
    </>
  );
};

export default KitchenMobile;
