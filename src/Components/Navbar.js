import React from "react";

import logo from "../assets/Standard Collection 11.svg";
import searchLogo from "../assets/ant-design_search-outlined.svg";
import bookHeart from "../assets/bx_bx-book-heart.svg";
import notification from "../assets/ic_round-notifications-none.svg";
import diamond from "../assets/fluent_premium-person-20-regular.svg";
import person from "../assets/IMG20210528181544.svg";
import arrow from "../assets/Arrow 1.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo}></img>
        <div className="text">
          <p className="keazon">KeazoN</p>
          <p className="books">Books</p>
        </div>
      </div>
      <div className="search">
        <div className="search-bar">
          <img src={searchLogo} />
          <input
            className="input"
            type="text"
            placeholder="Search for the book you want and read it now... Sherlock Holmes, Harry Pot..."
          ></input>
        </div>
        <button className="btn">Search</button>
      </div>
      <div className="icons">
        <img src={bookHeart} />
        <img src={notification} />
        <img src={diamond} />
        <div className="person-logo">
          <img src={person} />
          <img className="arrow" src={arrow} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
