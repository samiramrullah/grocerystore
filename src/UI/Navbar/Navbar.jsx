import { Link } from "react-router-dom";
import AddShoppingCartTwoToneIcon from "@material-ui/icons/AddShoppingCartTwoTone";
import SearchTwoToneIcon from "@material-ui/icons/SearchTwoTone";
import { useSelector } from "react-redux";

import "./Navbar.css";
const Navbar = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  return (
    <div className="Navbar_main">
      <div className="logo">
        <span>G</span>rocery <span>S</span>tore
      </div>
      <div className="links_page">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/about">
          About
        </Link>
        <Link className="link" to="/products">
          Products
        </Link>
        <Link className="link" to="/cart">
          cart
        </Link>
      </div>
      <div className="Navbar_button">
        <div className="link">
          <SearchTwoToneIcon />
        </div>
        <div className="link">
          <AddShoppingCartTwoToneIcon />
          <div className="carttext">{totalQuantity}</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
