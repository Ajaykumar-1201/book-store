import React, { useState } from "react";
import BookStore from "./Components/BookStore";
import Navbar from "./Components/Navbar";
import "./style.css";

const App = () => {
  const [query, setQuery] = useState("");
  return (
    <div>
      <Navbar setQuery={setQuery} />
      <BookStore query={query} />
    </div>
  );
};

export default App;
