import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalStateContext";

const Item = ({ name, img, stock,id}) => {

    const {carrito,AddToCard} = useContext(GlobalContext)

    const [state,setState] = useState({
        id,
        name,
        stock,
        img
    })
  return (
    <div class="card" style={{width:"18rem"}}>
      <img src={img} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <p class="card-text">{stock}</p>
        <button onClick={() => AddToCard(state)} class="btn btn-success my-4">agregar al carrito</button>
        <div>
        <Link to={`/itemDetail/${id}`} class="btn btn-primary">
            Mas Info
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
