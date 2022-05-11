import React, { useState } from "react";
import styles from './Evento.module.css'

const Eventos = () => {
  const [state,setState] = useState('')

  const handleClick = (e) => {
    alert('Se Clickeo')
  }

  const handleChange = (e) => {

    const {value} = e.target
    console.log(value)

  }

  const handleBlur = (e) => {
    console.log('blur',e.target.value);
  }

  const handleSubmit = () => {}

  // se crea => se ejecuta => se borra

  const handleContextMenu = () => {}


  const handleKeyDown = (e) => {


  } 

  return (
    <div className={styles.container}>
      <form className={styles.form} action="">
        <label htmlFor="nombre">Nombre</label>
        <input value={state} onKeyDown={handleKeyDown} onBlur={handleBlur} onChange={handleChange} id="nombre" type="text" />
        <button type="submit">enviar</button>
      </form>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default Eventos;
