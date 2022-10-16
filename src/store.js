import { createContext, useReducer } from "react";
import items from "./data.json";

export const Store = createContext();

const initialState = {
  data: items,
  categories: [...new Set(items.map((item) => item.category))],
  cartItems: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_CATEGORY":
      return {
        ...state,
        data: items.filter((item) => item.category === action.payload),
      };
    case "ADD_TO_CART":
      const newItem = action.payload;
      const existItem = state.cartItems.find((item) => item.id === newItem.id);
      const cartItems = existItem
        ? state.cartItems.map((item) =>
            item.id === existItem.id
              ? { ...item, quantity: item.quantity + newItem.quantity }
              : item
          )
        : [...state.cartItems, newItem];
      return { ...state, cartItems };
    default:
      return state;
  }
};
export function StorePrivider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
