import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ContextProvider from "./context/Context";
import ContextColProvider from "./context/ContextCol";
import FavoriteContextProvider from "./context/FavoriteContext";
import MainRoutes from "./MainRoutes";

function App() {
  return (
    <>
      <FavoriteContextProvider>
        <ContextColProvider>
          <ContextProvider>
            <Header />
            <MainRoutes />
            <Footer />
          </ContextProvider>
        </ContextColProvider>
      </FavoriteContextProvider>
    </>
  );
}

export default App;
