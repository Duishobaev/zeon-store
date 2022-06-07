import axios from "axios";
import React, { useReducer } from "react";

export const getContext = React.createContext();

const INIT_STATE = {
  items: [],
  goods: [],
  collections: [],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_ITEM_DATA":
      return { ...state, items: action.payload };
    case "GET_GOODS_DATA":
      return { ...state, goods: action.payload };
    case "GET_COLLECT_DATA":
      return { ...state, collections: action.payload };

    default:
      return state;
  }
};

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getItemsData = async (limit) => {
    let { data } = await axios(`http://localhost:8000/items?_limit=${limit}`);
    dispatch({
      type: "GET_ITEM_DATA",
      payload: data,
    });
  };

  const getGoodsData = async (limit) => {
    let { data } = await axios(`http://localhost:8000/goods?_limit=${limit}`);
    dispatch({
      type: "GET_GOODS_DATA",
      payload: data,
    });
  };

  const getColData = async (limit) => {
    let { data } = await axios(
      `http://localhost:8000/collections?_limit=${limit}`
    );
    dispatch({
      type: "GET_COLLECT_DATA",
      payload: data,
    });
  };

  return (
    <getContext.Provider
      value={{
        items: state.items,
        goods: state.goods,
        collections: state.collections,
        getItemsData,
        getGoodsData,
        getColData,
      }}
    >
      {children}
    </getContext.Provider>
  );
};

export default ContextProvider;
