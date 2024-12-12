import styles from "./Item.module.css";
import { useOutletContext } from "react-router-dom";

const Item = ({
  id = 0,
  itemName = "Test Item Name",
  itemImgSrc = "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR59Yy81pOzQg9iRFnvtCukGJDcb1peb_3iI1QjFtc5mKWxlI58ZQt2qP36d6P9mMtv-P0R5iFdRSvXXdvZG5U2gfNQGRArXh8DcNGjpKerOMGynuG1BBnzwcp6",
  itemPrice = 1,
}) => {
  const handleAddToCart = useOutletContext();
  return (
    <div className={styles.itemCard}>
      <img src={itemImgSrc} alt={itemName} />
      <h3>{itemName}</h3>
      <h2>{itemPrice}$</h2>
      <input type="number" min="0" name="quantity" defaultValue="1" />
      <button id={id} onClick={handleAddToCart}>
        Add to cart
      </button>
    </div>
  );
};

export { Item };
