import React from "react";
import Calculadora from "./components/Calculadora"
import DataContextProvider from"./components/DataContext"
import "./style.css";

//follow the tutorial
//https://www.youtube.com/watch?v=NGOzAaJRPQU
export default function App() {
  return (
    <div>
    <DataContextProvider>
      <Calculadora/>
      </DataContextProvider>
    </div>
  );
}
