import React from "react";
import { Route, Switch } from "react-router-dom";

import img1 from "../images/header.jpg";
import img2 from "../images/products.jpg";
import img3 from "../images/contact.jpg";
import img4 from "../images/admin.jpg";
import img5 from "../images/error.jpg";

import "../styles/Header.css";

const Header = () => {
  const images = [img1, img2, img3, img4];
  const index = Math.floor(Math.random() * 4);
  const img = images[index];

  return (
    <>
      <Switch>
        <Route
          path="/"
          exact
          render={() => <img src={img1} alt="homepage" />}
        />
        <Route
          path="/products"
          render={() => <img src={img2} alt="homepage" />}
        />
        <Route
          path="/contact"
          render={() => <img src={img3} alt="homepage" />}
        />
        <Route path="/admin" render={() => <img src={img4} alt="homepage" />} />
        <Route render={() => <img src={img5} alt="homepage" />} />
      </Switch>
      {/* <img src={img} alt="header" /> */}
    </>
  );
};

export default Header;
