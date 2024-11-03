import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Card } from "../Component/Card";

export const Coffees = () => {
  const data = useLoaderData();
  const [displayOrder, setDisplayOrder] = useState(data);

  const handlePopularSort = (sortType) => {
    if (sortType === "popular") {
      const newSort = [...data].sort((a, b) => b.popularity - a.popularity);
      setDisplayOrder(newSort);
    } else if (sortType === "ranking") {
      const newSort = [...data].sort((a, b) => b.rating - a.rating);
      setDisplayOrder(newSort);
    }
  };

  return (
    <div className="pt-20 w-9/12 mx-auto mb-10">
      <div className="my-8 flex justify-between items-center">
        <p className="text-3xl font-thin">
          Sort Coffee's by Popularity & Rating
        </p>
        <div className="space-x-4">
          <button
            onClick={() => handlePopularSort("popular")}
            className="bg-warning btn"
          >
            Sort By Popularity
          </button>
          <button
            onClick={() => handlePopularSort("ranking")}
            className="bg-warning btn"
          >
            Sort By Ranking
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayOrder.map((coffee) => (
          <Card coffee={coffee}></Card>
        ))}
      </div>
    </div>
  );
};
