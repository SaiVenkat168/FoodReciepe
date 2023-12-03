import React from "react";

const Navbar = ({ filterItem, menuList }) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {menuList.map((cur) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => filterItem(cur)}>
                {cur}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;