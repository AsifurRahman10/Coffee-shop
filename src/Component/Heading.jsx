import React from "react";

export const Heading = ({ heading, details }) => {
  return (
    <div className="my-12 text-center">
      <h2 className="text-3xl font-thin">{heading}</h2>
      <p className="text-gray-500">{details}</p>
    </div>
  );
};
