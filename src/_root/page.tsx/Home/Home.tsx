import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const meInfo = useSelector((state: any) => state);
  console.log(meInfo);
  return <div>Home</div>;
};

export default Home;
