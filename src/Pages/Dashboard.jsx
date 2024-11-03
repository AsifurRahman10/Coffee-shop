import React, { useEffect, useState } from "react";
import { getAllFavorites, removeFavorite } from "../Utility";
import { Card } from "../Component/Card";

export const Dashboard = () => {
  const [showLsData, setShowLsData] = useState([]);
  useEffect(() => {
    const lsData = getAllFavorites();
    setShowLsData(lsData);
  }, []);
  const handleRemove = (id) => {
    removeFavorite(id);
    const lsData = getAllFavorites();
    setShowLsData(lsData);
  };
  return (
    <div className="pt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-10/12 mx-auto">
      {showLsData.map((data) => (
        <Card coffee={data} handleRemove={handleRemove}></Card>
      ))}
    </div>
  );
};
