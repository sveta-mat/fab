import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import s from "./Cart.module.css";
import { useState, useEffect } from "react";
import { TbMinus, TbPlus } from "react-icons/tb";

import Counter from "../Blues/Counter";

const Cart = ({ cart, addDeleteCart, CART, setCART}) => {


  return (
    <div>
      <div className="home1">
        <NavLink to="/" className="homeIcon">
          <FaHome className="icon12" />
        </NavLink>
      </div>

      <h1 className={s.cartTitle}>Զամբյուղ</h1>
      <div className={s.tabl}>
        <div></div>
        <div>ՆԿԱՐ</div>
        <div>ԱՆՎԱՆՈՒՄ</div>
        <div>ԳԻՆ</div>
        <div>ՔԱՆԱԿ</div>
        <div>ԸՆԴՀԱՆՈՒՐ</div>
      </div>
      <div className={s.carts}>
        {CART?.map((cartItem, cartindex) => {
          return (
            <div className={s.cart} key={cartItem.id}>
              <div className={s.img}>
                <img className={s.i} src={cartItem.image[0].src} />
              </div>
              <button className={s.btn} onClick={()=>addDeleteCart(cartItem.id)}>X</button>
              <span className={s.color}> {cartItem.color[cartindex].col}</span>
              <span className={s.titleB}>{cartItem.title}</span>
              <span className={s.priceB}>{cartItem.prise}</span>
              <div className={s.count}>
                <TbMinus
                  className={s.btnC}
                  onClick={() => {
                    const newCart = CART.map((item, index) => {
                      return cartindex === index
                        ? {
                            ...item,
                            quantity: item.quantity > 0 ? item.quantity - 1 : 0,
                          }
                        : item;
                    });
                    setCART(newCart);
                  }}
                />

                <span className={s.p}> {cartItem.quantity} </span>
                <TbPlus
                  onClick={() => {
                    const newCart = CART.map((item, index) => {
                      return cartindex === index
                        ? { ...item, quantity: item.quantity + 1 }
                        : item;
                    });
                    setCART(newCart);
                  }}
                />
              </div>
              <span className={s.priceT}>
                {" "}
                {cartItem.prise * cartItem.quantity}{" "}
              </span>
            </div>
          );
        })}

        <div>
          <div className={s.tot}>
            <span className={s.total}>Ընդհանուր գումար։
            
            
              {CART.map((item) => item.prise * item.quantity).reduce(
                (total, value) => total + value,
                0
              )} դր․
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
