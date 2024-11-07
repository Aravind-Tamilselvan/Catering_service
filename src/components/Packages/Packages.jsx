import React from "react";
import DoneIcon from '@mui/icons-material/Done';
import { Margin } from "@mui/icons-material";

const Packages = () => {
  return (
    <section className="package-wrapper">
      <div className="package-container">
        <i>Our Packages</i>
        <h4>Choose Your Favorite Packages</h4>
        <p>
          Lorem ipsum adipisicing elit. Tempora placeat deserunt, cupiditate
          asperiores sed velit quos quisquam aspernatur eos tenetur dolor
          eligendi! Tempora.
        </p>
      </div>
<div className="box-container">
      <div className="basic-wrapper">
        <div className="basic-container">
            <h3>Basic Packages</h3>
            <div className="basic-content-1">
            <h2>$259,9<span><p>/event</p></span></h2>
            </div>
           
        </div><hr />
        <div className="basic-content-2">
            <p className="p"> <DoneIcon />5 Appetizers Menu</p>
            <p className="p"> <DoneIcon />8 Main Course Menu</p>
            <p className="p"> <DoneIcon />10 Dessert Menu</p>
            <p className="p"> <DoneIcon />12 Drink & Cocktail Menu</p>
            <div className="btn">
                <p>BOOK NOW</p>
            </div>
        </div>
      </div>

      <div className="premium-wrapper">
        <div className="premium-container">
            <h3>Premium Package</h3>
            <div className="premium-content-1">
            <h2>$659,9<span><p>/event</p></span></h2>
            </div>
            
        </div><hr />
        <div className="premium-content-2">
            <p className="p"> <DoneIcon />5 Appetizers Menu</p>
            <p className="p"> <DoneIcon />8 Main Course Menu</p>
            <p className="p"> <DoneIcon />10 Dessert Menu</p>
            <p className="p"> <DoneIcon />12 Drink & Cocktail Menu</p>
            <p className="p"> <DoneIcon />Free Flow Drinks</p>
            <div className="btn">
                <p>BOOK NOW</p>
            </div>
        </div>
      </div>

      <div className="advanced-wrapper">
        <div className="advanced-container">
            <h3>Advanced Package</h3>
            <div className="advanced-content-1">
            <h2>$459,9<span><p>/event</p></span></h2>
            </div>
            
        </div><hr />
        <div className="advanced-content-2">
            <p className="p"> <DoneIcon />5 Appetizers Menu</p>
            <p className="p"> <DoneIcon />8 Main Course Menu</p>
            <p className="p"> <DoneIcon />10 Dessert Menu</p>
            <p className="p"> <DoneIcon />12 Drink & Cocktail Menu</p>
            <div className="btn">
                <p className="book">BOOK NOW</p>
            </div>
        </div>
      </div>

        </div>
    </section>
  );
};

export default Packages;
