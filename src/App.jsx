import React from "react";
import Create from "./components/Create";
import Show from "./components/Show";

const App = () => {
  return (
    <div className="container text-center mt-5">
      <h2>CRUD Context API - Reducer</h2>
    <Create />
    <Show />
    </div>
    );
   
};

export default App;
