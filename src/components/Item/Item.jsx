import React from "react";
import styles from "./Item.module.css";

const Item = ({
  itemName = "Test Item Name",
  itemImgSrc = "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR59Yy81pOzQg9iRFnvtCukGJDcb1peb_3iI1QjFtc5mKWxlI58ZQt2qP36d6P9mMtv-P0R5iFdRSvXXdvZG5U2gfNQGRArXh8DcNGjpKerOMGynuG1BBnzwcp6",
  itemPrice = 134.48,
  itemRating = 4,
  itemRatingCount = 12,
}) => {
  return (
    <div className={styles.itemCard}>
      <img src={itemImgSrc} alt={itemName} />
      <h3>{itemName}</h3>
      <h2>{itemPrice}$</h2>
      <div className={styles.rating}>
        <div>{itemRating} stars</div>
        <div> ({itemRatingCount})</div>
      </div>
      <div className={styles.cartButtonContainer}>
        <button>Quick Add</button>
        <button>Add to cart</button>
      </div>
    </div>
  );
};

export { Item };
