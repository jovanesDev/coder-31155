import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Card from "../views/Card";
import Checkout from "../views/Checkout";
import Error from "../views/Error";
import Home from "../views/Home";
import ItemDetail from "../views/ItemDetail";

const Rutas = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/card" element={<Card />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/item-detail/:id" element={<ItemDetail/>}/>
            <Route path="*" element={<Error/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Rutas;
