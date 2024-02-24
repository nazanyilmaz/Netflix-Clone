import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="mb-15">
      <Link to={"/"}>
        <img className="max-w-[150px]" src="/netflix_logo2.svg" />
      </Link>
    </header>
  );
};

export default Header;
