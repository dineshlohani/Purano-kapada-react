import React from "react";
import "./style.css";

const Cart = ({ cartItem, addToCart, decreaseQty }) => {
  const totalPrice = cartItem.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );
  return (
    <div>
      <section className="cart-items">
        <div className="container d_flex">
          <div className="cart-details">
            {cartItem.length === 0 && (
              <h1 className="no-items product">No items are add in Cart</h1>
            )}
            {cartItem.map((item) => {
              const productQty = item.price * item.qty;
              return (
                <div className="cart-list product d_flex">
                  <div className="img">
                    <img src={item.cover} alt="" />
                  </div>
                  <div className="cart-details">
                    <h3>{item.name}</h3>
                    <h4>
                      {item.price}.00 * {item.qty}
                      <span>${productQty}.00</span>
                    </h4>
                  </div>
                  <div className="cart-items-function">
                    <div className="removeCart">
                      <button>
                        <i className="fa -solid fa-xmark"></i>
                      </button>
                    </div>
                    <div className="cartControl d_flex">
                      <button
                        className="incCart"
                        onClick={() => addToCart(item)}
                      >
                        <i className="fa fa-plus"></i>
                      </button>
                      <button
                        className="descCart"
                        onClick={() => decreaseQty(item)}
                      >
                        <i className="fa fa-minus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="cart-total product">
            <h2>Cart Summary</h2>
            <div className="d_flex">
              <h4>Total Price:</h4>
              <h3>Rs {totalPrice}.00</h3>
            </div>
            <div style={{display:'flex', alignItems:'center', justifyContent:'space-around',marginTop:"2rem"}}>
            <p className="btn-primary"> payments</p>
            <a href="https://esewa.com.np/#/home" target={"_blank"}>
            <img style={{height:"50px"}} src="https://th.bing.com/th/id/OIP.5XH5bO6nKc5BHi4yu7uDmAHaFK?pid=ImgDet&rs=1"/>
           </a>
           </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
