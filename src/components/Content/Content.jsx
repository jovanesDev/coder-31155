import React from "react";
import Card from "../Card/Card";
import Propiedades from "../claseDosComponentes/Props/Example";

const Content = () => {

  return (
    <main className="d-flex justify-content-evenly w-100 bg-warning p-5">
      <Card
        texto={"Titulo 1"}
        color={"danger"}
        parafo={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam illo itaque dignissimos nihil? Vel, provident explicabo totam exercitationem veritatis ipsum similique voluptatum quas repellendus earum libero, officiis nisi consequatur porro."
        }
        imagen={
          "https://media.admagazine.com/photos/61de539e089751617cd2fc74/4:3/w_1884,h_1413,c_limit/plantas.jpg"
        }
        buttonText={"Confirmar"}
        //buttonStyle={"btn btn-warning"}
        btn={true}
      />
      <Card
        texto={"Titulo 2"}
        color={"info"}
        parafo={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam illo itaque dignissimos nihil? Vel, provident explicabo totam exercitationem veritatis ipsum similique voluptatum quas repellendus earum libero, officiis nisi consequatur porro."
        }
        imagen={
          "https://cumbrepuebloscop20.org/wp-content/uploads/2018/09/Le%C3%B3n-2.jpg"
        }
        buttonText={"Enviar"}
        buttonStyle={"btn btn-danger"}
        btn
      />
      <Card
        texto={"Titulo 3"}
        color={"secondary"}
        parafo={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam illo itaque dignissimos nihil? Vel, provident explicabo totam exercitationem veritatis ipsum similique voluptatum quas repellendus earum libero, officiis nisi consequatur porro."
        }
        buttonText={"Suscribir"}
        buttonStyle={"btn btn-primary"}
      />
    </main>
  );
};

export default Content;
