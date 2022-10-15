import { createContext, useReducer } from "react";
import items from "./data.json";

export const Store = createContext();

const initialState = {
  data: items,
  categories: [...new Set(items.map((item) => item.category))],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_CATEGORY":
      return {
        ...state,
        data: items.filter((item) => item.category === action.payload),
      };
    default:
      return state;
  }
};
export function StorePrivider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
