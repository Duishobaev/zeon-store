import axios from "axios";
import React, { useReducer } from "react";

export const getContextCol = React.createContext();

const INIT_STATE = {
  collects: [],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_COL_DATA":
      return { ...state, collects: action.payload };
    default:
      return state;
  }
};

const ContextColProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getColData = async (limit) => {
    let { data } = await axios(
      `http://localhost:8000/collects?_limit=${limit}`
    );
    dispatch({
      type: "GET_COL_DATA",
      payload: data,
    });
  };

  return (
    <getContextCol.Provider
      value={{
        collects: state.collects,
        getColData,
      }}
    >
      {children}
    </getContextCol.Provider>
  );
};

export default ContextColProvider;
