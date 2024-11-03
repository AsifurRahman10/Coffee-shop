import React, { useEffect, useState } from "react";
import { getAllFavorites } from "../Utility";
import { Card } from "../Component/Card";

export const Dashboard = () => {
  const [showLsData, setShowLsData] = useState([]);
  useEffect(() => {
    const lsData = getAllFavorites();
    setShowLsData(lsData);
  }, []);
  return (
    <div className="pt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 mx-auto">
      {showLsData.map((data) => (
        <Card coffee={data}></Card>
      ))}
    </div>
  );
};
