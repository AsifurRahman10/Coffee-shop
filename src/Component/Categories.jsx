import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

export const Categories = ({ data }) => {
  return (
    <div className="w-9/12 mx-auto">
      <div role="tablist" className="tabs tabs-lifted">
        {data.map((category) => (
          <NavLink
            to={category.category}
            key={category.id}
            role="tab"
            className={({ isActive }) =>
              `tab text-xl ${isActive ? "tab-active" : ""}`
            }
          >
            {category.category}
          </NavLink>
        ))}
      </div>
      <Outlet></Outlet>
    </div>
  );
};
