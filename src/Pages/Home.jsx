import React from "react";
import { Banner } from "../Component/Banner";
import { Heading } from "../Component/Heading";
import { Categories } from "../Component/Categories";
import { Outlet, useLoaderData } from "react-router-dom";

export const Home = () => {
  const data = useLoaderData();
  return (
    <div className="min-h-[calc(100vh-228px)]">
      <Banner></Banner>
      <Heading
        heading={"Browse Coffees by Category"}
        details={
          "Choose your desired coffee category to browse through specific coffees that fit in your taste"
        }
      ></Heading>
      <Categories data={data}></Categories>
    </div>
  );
};
