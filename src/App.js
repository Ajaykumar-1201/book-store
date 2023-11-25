import React from "react";
import BookStore from "./Components/BookStore";
import Navbar from "./Components/Navbar";
import "./style.css"

const App = () => {
  return <div>
    <Navbar/>
    <BookStore/>
  </div>;
};

export default App;
