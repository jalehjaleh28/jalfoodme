import axios from "axios";
import React, { useState, useEffect } from "react";
import "./CategoryMoile.css";
import { Link } from "react-router-dom";

const CategoryMoile = ({ showMenu }) => {
  const [fetch, setFetch] = useState([]);
  const api = async () => {
    const res = await axios.get(
      "https://themealdb.com/api/json/v1/1/categories.php"
    );
    setFetch(res.data.categories);
  };
  useEffect(() => {
    api();
  }, []);

  const showData = fetch.map((items) => {
    return (
      <li key={items.idCategory}>
        <Link
          onClick={() => showMenu()}
          to={`/search/categories/${items.strCategory}`}
          className="catLink mobile-link"
        >
          <img
            src={items.strCategoryThumb}
            alt={items.strCategoryDescription}
          />
          <span>{items.strCategory}</span>
        </Link>
      </li>
    );
  });

  return (
    <>
      <ul className="ingredianteulmobile">{showData}</ul>
    </>
  );
};

export default CategoryMoile;
