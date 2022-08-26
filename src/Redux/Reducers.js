import { combineReducers } from "redux";
import { all, categoray, user } from "./ActionTypes";
import Initialstate from "./Initialstate";

const cardReducer = (state = Initialstate, action) => {
  switch (action.type) {
    case categoray:
      return {
        ...state,
        carts: state.carts.filter((item) => item.category === action.payload),
      };

    case user:
      return {
        ...state,
        carts: state.carts.filter((item) => item.name === action.payload),
      };

    case all:
      return state;

    default:
      return state;
  }
};

const Reducers = combineReducers({ cardReducer });

export default Reducers;
