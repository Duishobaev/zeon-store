import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import CartContextProvider from "./context/CartContext";
import ContextProvider from "./context/Context";
import ContextColProvider from "./context/ContextCol";
import FavoriteContextProvider from "./context/FavoriteContext";
import MainRoutes from "./MainRoutes";

function App() {
  return (
    <>
      <CartContextProvider>
        <FavoriteContextProvider>
          <ContextColProvider>
            <ContextProvider>
              <Header />
              <MainRoutes />
              <Footer />
            </ContextProvider>
          </ContextColProvider>
        </FavoriteContextProvider>
      </CartContextProvider>
    </>
  );
}

export default App;
