import React from "react";
import SHOP_DATA from "./SHOP_DATA";
import CollectionPreview from "../../components/preview-collection/preview-collection";

class ShopPage extends React.Component {
  constructor(props) {
    super();
    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollecionProps }) => (
          <CollectionPreview
            key={id}
            {...otherCollecionProps}></CollectionPreview>
        ))}
      </div>
    );
  }
}
export default ShopPage;
