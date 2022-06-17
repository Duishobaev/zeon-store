import axios from "axios";
import React, { useReducer } from "react";

export const getContext = React.createContext();

const INIT_STATE = {
  items: [],
  goods: [],
  collections: [],
  detData: [],
  colors: [],
  season: [],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_ITEM_DATA":
      return { ...state, items: action.payload };
    case "GET_GOODS_DATA":
      return { ...state, goods: action.payload };
    case "GET_COLLECT_DATA":
      return { ...state, collections: action.payload };
    case "DET_DATA":
      return { ...state, detData: action.payload };
    case "COLOR":
      return { ...state, colors: action.payload };
    case "summer":
      return { ...state, season: action.payload };
    case "nature":
      return { ...state, season: action.payload };
    case "winter":
      return { ...state, season: action.payload };
    case "autumn":
      return { ...state, season: action.payload };
    case "dress":
      return { ...state, season: action.payload };
    case "skirts":
      return { ...state, season: action.payload };

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
    let { data } = await axios(`http://localhost:8000/skirts?_limit=${limit}`);
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

  //Details
  const showDetails = async (collection, id) => {
    let detData = await axios(`http://localhost:8000/${collection}/${id}`);
    dispatch({
      type: "DET_DATA",
      payload: detData.data,
    });
  };

  const getColors = async () => {
    let { data } = await axios("http://localhost:8000/colors");
    dispatch({
      type: "COLOR",
      payload: data,
    });
  };

  //similar

  let getSimilar = async (type) => {
    if (type === "Коллекция лето 2020") {
      let { data } = await axios("http://localhost:8000/summer?_limit=5");
      dispatch({
        type: "summer",
        payload: data,
      });
    } else if (type === "Коллекция зима 2020") {
      let { data } = await axios("http://localhost:8000/winter?_limit=5");
      dispatch({
        type: "winter",
        payload: data,
      });
    } else if (type === "Для выезда на природу") {
      let { data } = await axios("http://localhost:8000/nature?_limit=5");
      dispatch({
        type: "nature",
        payload: data,
      });
    } else if (type === "Платья") {
      let { data } = await axios("http://localhost:8000/dress?_limit=5");
      dispatch({
        type: "dress",
        payload: data,
      });
    } else if (type === "Коллекция осень 2020") {
      let { data } = await axios("http://localhost:8000/autumn?_limit=5");
      dispatch({
        type: "autumn",
        payload: data,
      });
    } else {
      let { data } = await axios("http://localhost:8000/skirts?_limit=5");
      dispatch({
        type: "skirts",
        payload: data,
      });
    }
  };

  return (
    <getContext.Provider
      value={{
        items: state.items,
        goods: state.goods,
        colors: state.colors,
        detData: state.detData,
        collections: state.collections,
        getItemsData,
        getGoodsData,
        getColData,
        showDetails,
        getColors,
        season: state.season,
        getSimilar,
      }}
    >
      {children}
    </getContext.Provider>
  );
};

export default ContextProvider;
