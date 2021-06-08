import React from "react";
// import SHOP_DATA from "./SHOP_DATA";
import CollectionOverview from "../../components/collection_overview/collection_overview";
import { Route } from "react-router-dom";
import CollectionPage from "../collection/collection";

const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
