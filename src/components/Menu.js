import React, { useState } from "react";
import "./style.css";
import Api from "./MenuApi.js";
import CardItem from "./CardItem";
import Navbar from "./Navbar";

const uniqueList = [
  ...new Set(
    Api.map((cur) => {
      return cur.category;
    })
  ),
  "All",
];

const Menu = () => {
  const [menuData, setMenuData] = useState(Api);
  const [menuList, setMenuList] = useState(uniqueList);

  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(Api);
      return;
    }

    const updatedList = Api.filter((cur) => {
      return cur.category === category;
    });

    setMenuData(updatedList);
  };

  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />
      <CardItem menuData={menuData} />
    </>
  );
};

export default Menu;