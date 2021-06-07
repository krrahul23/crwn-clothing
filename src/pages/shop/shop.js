import React from "react";
// import SHOP_DATA from "./SHOP_DATA";
import CollectionOverview from "../../components/collection_overview/collection_overview";

const ShopPage = ({ collections }) => {
  return (
    <div className="shop-page">
      <CollectionOverview />
    </div>
  );
};

export default ShopPage;
