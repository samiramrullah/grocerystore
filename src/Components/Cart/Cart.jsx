import React from "react";
import "./Cart.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
const Cart = () => {
  const [totalprice,settotalprice]=useState(0)
  const selectedcartItem= useSelector(state=>state.cart.items)
  const totalPrice=useSelector(state=>state.cart.items);
  useEffect(()=>{
      let sum=0;
      // eslint-disable-next-line array-callback-return
      totalPrice.map((item)=>{
        <div>
          {sum}={sum}+{item.price}
        </div>
      })
      settotalprice(sum);
  },[totalPrice])

  console.log(totalprice);

  return (
    <div className="cart_main">
      <div className="container">
        <div className="heading">
          <h1>
            <span className="shopper">s</span> Shopping Cart
          </h1>
          <a href="1" className="visibility-cart transition is-open">
            X
          </a>
        </div>

        <div className="cart transition is-open">
          <a href="1" className="btn btn-update">
            Update cart
          </a>

          <div className="table">
            <div className="layout-inline row th">
              <div className="col col-pro">Product</div>
              <div className="col col-price align-center ">Price</div>
              <div className="col col-qty align-center">QTY</div>
              <div className="col">VAT</div>
              <div className="col">Total</div>
            </div>

            {selectedcartItem?.map((itm) => (
              <div key={itm.id}>
                <CartItem
                  id={itm.id}
                  name={itm.name}
                  description="{itm.description}"
                  price={itm.price}
                  count={itm.quantity}
                  vat="88"
                  total={itm.totalPrice}
                  quantity={itm.quantity}
                />
              </div>
            ))}

            <div className="tf">
              <div className="row layout-inline">
                <div className="col">
                  <p>VAT</p>
                </div>
                <div className="col"></div>
              </div>
              <div className="row layout-inline">
                <div className="col">
                  <p>Shipping</p>
                </div>
                <div className="col"></div>
              </div>
              <div className="row layout-inline">
                <div className="col">
                  <p>Total</p>
                </div>
                <div className="col"></div>
              </div>
            </div>
          </div>

          <Link className="btn btn-update" to="/">
            CheckOut
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
