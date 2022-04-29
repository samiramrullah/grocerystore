import React from "react";
import { cartActions } from "../../Redux/Store/CartSlice";
import { useDispatch } from "react-redux";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import image from "../../Images/apple.jpg";
import "./CartItem.css";
const CartItem = (props) => {
  const dispatch = useDispatch();
  const removeItemHandler = (id) => {
    dispatch(cartActions.removeItemFromCart(id));
  };
  const addItemhandler = (data) => {
    dispatch(cartActions.addItemToCart(data));
  };

  return (
    <div className="CartItem_main">
      <div className="layout-inline row">
        <div className="col col-pro layout-inline">
          <img src={image} alt="Product" />
          <p>{props.name}</p>
        </div>

        <div className="col col-price col-numeric align-center ">
          <p>{props.price}</p>
        </div>

        <div className="col col-qty layout-inline">
          <button
            onClick={() => removeItemHandler(props.id)}
            className="qty qty-minus"
          >
            <RemoveIcon />
          </button>
          <input type="numeric" value={props.count} />
          <button
            onClick={() => addItemhandler(props)}
            className="qty qty-plus"
          >
            <AddIcon />
          </button>
        </div>

        <div className="col col-vat col-numeric">
          <p>{props.vat}</p>
        </div>
        <div className="col col-total col-numeric">
          {" "}
          <p> {props.total}</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
