import React from "react";
// import SHOP_DATA from "./SHOP_DATA";
import CollectionOverview from "../../components/collection_overview/collection_overview";
import { Route } from "react-router-dom";
import CollectionPage from "../collection/collection";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop_reselector";

const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default ShopPage;
