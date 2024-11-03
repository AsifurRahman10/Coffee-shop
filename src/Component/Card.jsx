import React from "react";
import { Link } from "react-router-dom";

export const Card = ({ coffee }) => {
  const { id, image, name, category, type, origin, rating, popularity } =
    coffee;
  return (
    <div className="flex relative">
      <Link
        to={`/coffee/${id}`}
        className="transition  hover:scale-105 shadow-xl rounded-xl overflow-hidden"
      >
        <figure className="w-full h-48 overflow-hidden">
          <img className="" src={image} alt="" />
        </figure>
        <div className="p-4">
          <h1 className="text-xl">Name: {name}</h1>
          <p>Category: {category}</p>
          <p>Type: {type}</p>
          <p>Origin: {origin}</p>
          <p>Rating: {rating}</p>
          <p>Popular: {popularity}</p>
        </div>
      </Link>
      {/* {pathname === "/dashboard" && (
        <div
          onClick={() => handleRemove(id)}
          className="absolute p-3 rounded-full cursor-pointer bg-warning -top-5 -right-5"
        >
          <FaTrashAlt size={20} />
        </div>
      )} */}
    </div>
  );
};