import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#projects">Projects</a>
    
    {/* display an <a> tag for each link here */}</nav>;
}

export default NavBar;
