// import logo from './logo.svg';
// import './App.css';
// import Prueba from './components/Prueba/Prueba';
// import Promise from './components/Promesas/Promise';
import { useEffect, useState } from "react";
import Promesa from "./components/Promesas/Promise";

function App() {
  // // esto es el backend del sony

  const [juegos, setJuegos] = useState([]);

  const playStation = [
    { nombre: "GOD OF WAR" },
    { nombre: "HALO" },
    { nombre: "CALL OF DUTY" },
  ];
  // const item = {
  //   id: 1,
  //   nombre: "galletita",
  //   descripcion: "9 de oro ",
  //   stock: 20,
  // };

  useEffect(() => {
    const pedido = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(playStation);
      }, 5000);
    });

    pedido
      .then(
        (res) => {
          setJuegos(res);
        },
        (err) => {
          console.log("error", err);
        }
      )
      .then(() => console.log(juegos)) // playStation
      .catch((err) => console.log(err));

    console.log(juegos); // []

    return () => {};
  }, []);

  return (
    <div className="App">
      <Promesa juegos={juegos} />
    </div>
  );
}

export default App;
