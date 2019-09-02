import React from 'react'
import ReactDOM from "react-dom";
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () =>{
  const root = document.getElementById("root")
  const store = configureStore();

  ReactDOM.render(<h2>FULL STACK BBY</h2>, root)

})