import React from "react";
import { Link } from "react-router-dom";


const Item = ({id}) => {
  return (
    <>
    <Link to={`/item-detail/${id}`} >
      <div>
        <h1>Item </h1>
      </div>
    </Link>
    </>
  );
};

export default Item;
