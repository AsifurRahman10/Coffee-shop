import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { Card } from "./Card";

export const CoffeeCard = () => {
  const navigate = useNavigate();
  const data = useLoaderData();
  const { categoryName } = useParams();
  const [coffeeData, setCoffeeData] = useState([]);
  useEffect(() => {
    if (categoryName) {
      const categoryWiseDisplay = [...data].filter(
        (c) => c.category === categoryName
      );
      setCoffeeData(categoryWiseDisplay);
    } else {
      setCoffeeData(data.slice(0, 6));
    }
  }, [categoryName, data]);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {coffeeData.map((coffee) => (
          <Card coffee={coffee}></Card>
        ))}
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => navigate("/coffees")}
          className="btn bg-warning my-10"
        >
          View All
        </button>
      </div>
    </div>
  );
};
