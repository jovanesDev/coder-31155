import React from "react";
import ironImg from "../../assetes/img/iron.jpg";
const Card = ({
  texto,
  color,
  parafo,
  buttonText,
  imagen,
  btn,
  buttonStyle,
}) => {

  return (
    <div className={`card ${color}`} style={{ width: "18rem" }}>
      <img src={imagen || ironImg} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{texto}</h5>
        <p className="card-text">{parafo}</p>
        {btn && (
          <button className={buttonStyle || 'btn btn-primary'}>{buttonText}</button>
        )}
      </div>
    </div>
  );
};

export default Card;
