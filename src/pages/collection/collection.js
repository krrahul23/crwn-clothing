import React from "react";
import "./collection.scss";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop_reselector";

import CollectionItem from "../../components/collection-item/collection-item";

const CollectonPage = ({ collection }) => {
  console.log(collection);
  return (
    <div className="collection">
      <h1>Collection Page</h1>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectonPage);
