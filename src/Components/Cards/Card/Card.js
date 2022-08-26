import React from "react";
import { useDispatch } from "react-redux";
import { Categoraycard, Usercard } from "../../../Redux/Actions";
const Card = ({ item }) => {
  const dispatch = useDispatch();
  const handleName = (name) => {
    dispatch(Usercard(name));
  };
  const handleCategory = (category) => {
    dispatch(Categoraycard(category));
  };
  return (
    <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div class="flex-shrink-0">
        <img class="h-48 w-full object-cover" src={item.img} alt="" />
      </div>

      <div class="flex-1 bg-white p-6 flex flex-col justify-between">
        <div class="flex-1">
          <p
            onClick={() => handleCategory(item.category)}
            class="text-sm font-medium text-indigo-600"
          >
            <span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
              {item.category}
            </span>
          </p>
          <a href="#" class="block mt-1">
            <p class="text-xl font-semibold text-gray-900">
              {item.description}
            </p>
          </a>
        </div>
        <div class="mt-6 flex items-center">
          <div class="flex-shrink-0">
            <img class="h-10 w-10 rounded-full" src={item.userimg} alt="" />
          </div>
          <div class="ml-3">
            <p
              onClick={() => handleName(item.name)}
              class="text-sm font-medium text-gray-900 hover:underline"
            >
              {item.name}
            </p>
            <div class="flex space-x-1 text-sm text-gray-500">
              <time datetime="2020-03-16">{item.time}</time>
              <span aria-hidden="true">&middot;</span>
              <span> {item.readtime} </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
