import React, { useReducer } from "react";
export const favoriteContext = React.createContext();
const INIT_STATE = {
  fav: JSON.parse(localStorage.getItem("fav")),
  favoriteLength: 0,
};
function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_FAV":
      return {
        ...state,
        fav: action.payload,
        favoriteLength: action.payload.products.length,
      };
    default:
      return state;
  }
}
const FavoriteContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  function createFav() {
    let fav = JSON.parse(localStorage.getItem("fav"));
    if (!fav) {
      fav = {
        products: [],
      };
      localStorage.setItem("fav", JSON.stringify(fav));
    }
    return fav;
  }

  const getFav = () => {
    let fav = createFav();
    dispatch({
      type: "GET_FAV",
      payload: fav,
    });
  };

  const addDelFav = (product) => {
    let fav = createFav();
    let newProd = {
      item: product,
    };
    let checkProdInFav = fav.products.some((obj) => {
      return obj.item.id === product.id;
    });
    if (checkProdInFav) {
      fav.products = fav.products.filter((obj) => {
        return obj.item.id !== product.id;
      });
    } else {
      fav.products.push(newProd);
    }
    localStorage.setItem("fav", JSON.stringify(fav));
    getFav();
  };

  const isProdInFav = (id) => {
    let fav = createFav();
    let exist = fav.products.some((obj) => {
      return obj.item.id === id;
    });
    return exist;
  };

  const deleteProdInFav = (id) => {
    let fav = createFav();
    fav.products = fav.products.filter((elem) => {
      return elem.item.id !== id;
    });
    localStorage.setItem("fav", JSON.stringify(fav));
    getFav();
  };

  return (
    <favoriteContext.Provider
      value={{
        fav: state.fav,
        favoriteLength: state.favoriteLength,
        addDelFav,
        getFav,
        deleteProdInFav,
        isProdInFav,
      }}
    >
      {children}
    </favoriteContext.Provider>
  );
};
export default FavoriteContextProvider;
