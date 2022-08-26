import React, { useState } from "react";
import serchImg from "../assets/search.svg";
const Searchbar = ({ handleSearch, search }) => {
  return (
    <div class="border mb-6 border-slate-200 flex items-center w-11/12 lg:w-1/2 mx-auto bg-gray-50 h-12 px-5 rounded-lg text-sm ring-emerald-200">
      <input
        class="outline-none border-none bg-gray-50 h-full w-full mr-2"
        type="search"
        name="search"
        placeholder="Search"
        value={search}
        onChange={handleSearch}
      />
      <img class="inline h-6 cursor-pointer" src={serchImg} alt="Search" />
    </div>
  );
};

export default Searchbar;
