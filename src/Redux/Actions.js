import { all, categoray, user } from "./ActionTypes";

export const Allcard = () => {
  return {
    type: all,
  };
};

export const Categoraycard = (cate) => {
  return {
    type: categoray,
    payload: cate,
  };
};
export const Usercard = (name) => {
  return {
    type: user,
    payload: name,
  };
};
