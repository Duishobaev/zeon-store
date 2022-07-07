import React from "react";
import { useReducer } from "react";

export const cartContext = React.createContext();

const INIT_STATE = {
  cart: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  cartLen: 0,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_CART":
      return {
        ...state,
        cart: action.payload,
        cartLen: action?.payload?.products?.length,
      };
    default:
      return state;
  }
};

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const createCart = () => {
    let cartData = JSON.parse(localStorage.getItem("cart"));
    if (!cartData) {
      cartData = {
        products: [],
      };
      localStorage.setItem("cart", JSON.stringify(cartData));
    }
    return cartData;
  };

  const getCart = () => {
    let cartData = createCart();
    dispatch({
      type: "GET_CART",
      payload: cartData,
    });
  };

  const addToCart = (product) => {
    let cartData = createCart();

    let newProd = {
      item: product,
    };

    let checkProdInCart = cartData.products.some((obj) => {
      return obj.item.id === product.id && obj.item.color === product.color;
    });

    if (checkProdInCart) {
      cartData.products = cartData.products.filter((obj) => {
        return obj.item.id == product.id && obj.item.color !== product.color;
      });
    } else {
      cartData.products.push(newProd);
    }

    localStorage.setItem("cart", JSON.stringify(cartData));
    getCart();
  };

  let checkColor = (id, color) => {
    let cartData = createCart();

    const research = cartData.products.some((item) => {
      return item.item.id === id && item.item.color === color;
    });

    return research;
  };

  const isProdInCart = (id) => {
    let cartData = createCart();

    let exist = cartData.products.some((obj) => {
      return obj.item.id === id;
    });
    return exist;
  };

  const deleteProdInCart = (id, color) => {
    let cartData = createCart();

    const index = cartData.products.findIndex((elem) => {
      return elem.item.id == id && elem.item.color == color;
    });

    cartData?.products.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cartData));
    getCart();
  };

  const increase = (item) => {
    let cartData = JSON.parse(localStorage.getItem("cart"));
    cartData.products.map((elem) => {
      if (elem.item.id == item.id && elem.item.color == item.color) {
        elem.item.count = elem.item.count + 1;
      }
    });

    localStorage.setItem("cart", JSON.stringify(cartData));
    getCart();
  };

  const decrease = (item) => {
    let cartData = JSON.parse(localStorage.getItem("cart"));
    cartData.products.map((elem) => {
      if (elem.item.id == item.id && elem.item.color == item.color) {
        elem.item.count == 1
          ? (elem.item.count = elem.item.count - 0)
          : (elem.item.count = elem.item.count - 1);
      }
    });

    localStorage.setItem("cart", JSON.stringify(cartData));
    getCart();
  };

  return (
    <cartContext.Provider
      value={{
        cart: state.cart,
        cartLen: state.cartLen,
        addToCart,
        getCart,
        deleteProdInCart,
        isProdInCart,
        checkColor,
        increase,
        decrease,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export default CartContextProvider;
