import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./collection_overview.scss";
import { selectCollectionForPreview } from "../../redux/shop/shop_reselector";

import CollectionPreview from "../preview-collection/preview-collection";

const CollectionOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollecionProps }) => (
      <CollectionPreview key={id} {...otherCollecionProps}></CollectionPreview>
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
