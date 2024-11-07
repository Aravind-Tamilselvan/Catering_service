import React from "react";
import "../../style/style.css";
import BasicTabs from "./menubar/menubar";

const Menu = () => {
  return (
    <section className="menu-wrapper">
      <div className="menu-container">
        <i>Our Mess</i>
        <h4>Check Out Our Menu</h4>
        <p>
          Lorem ipsum adipisicing elit. Tempora placeat deserunt, cupiditate
          asperiores sed velit quos quisquam aspernatur eos tenetur dolor
          eligendi! Temporary.
        </p>
      </div>
      <div className="menubar-wrapper">
        <BasicTabs />
      </div>
    </section>
  );
};

export default Menu;
