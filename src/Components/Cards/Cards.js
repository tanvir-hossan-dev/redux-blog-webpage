import React from "react";
import Card from "./Card/Card";
import { useDispatch } from "react-redux";
import { Allcard } from "../../Redux/Actions";

const Cards = ({ data }) => {
  const dispatch = useDispatch();
  const handleClear = () => {
    dispatch(Allcard());
    console.log("clear");
  };
  return (
    <>
      <button onClick={handleClear}>Clear filter</button>
      <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
        {data.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </>
  );
};

export default Cards;
