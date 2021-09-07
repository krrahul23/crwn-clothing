import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51J1CHpSCroLnmXSrj8Q9iXvmlLKyNHPbskQHW9TzSLRsvSkEUpIKKFce7MOPxxKkoyRz9ixtdzxGbOmbAxGKDR3d0065RnTmLD";

  const onToken = (token) => {
    console.log(token);
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress=""
      shippingAddress=""
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
      currency="INR"
      bitcoin={true}
    />
  );
};

export default StripeCheckoutButton;
