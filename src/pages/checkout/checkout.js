import React from "react";

import "./checkout.scss";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import StripeCheckoutButton from "../../components/stripe/stripe-button";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selector";
import "./checkout-item";
import "./checkout-item";
import CheckoutItem from "./checkout-item";
const CheckoutPage = ({ cartItems, cartTotal }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>

      <div className="header-block">
        <span>Description</span>
      </div>

      <div className="header-block">
        <span>Quantity</span>
      </div>

      <div className="header-block">
        <span>Price</span>
      </div>

      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className="total">
      <span>TOTAL: ₹{cartTotal}</span>
    </div>
    <div className="test-warning">
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp 12/25 - CVV:123
    </div>
    <StripeCheckoutButton price={cartTotal} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
