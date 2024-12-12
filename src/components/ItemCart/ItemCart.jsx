import styles from "./ItemCart.module.css";
import { useOutletContext } from "react-router-dom";

const ItemCart = ({
  id = 0,
  itemName = "Test Item Name",
  itemImgSrc = "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR59Yy81pOzQg9iRFnvtCukGJDcb1peb_3iI1QjFtc5mKWxlI58ZQt2qP36d6P9mMtv-P0R5iFdRSvXXdvZG5U2gfNQGRArXh8DcNGjpKerOMGynuG1BBnzwcp6",
  itemPrice = 1,
  quantity = 1,
  deleteItem,
}) => {
  const totalPrice = itemPrice * quantity;

  return (
    <div className={styles.itemCard}>
      <img src={itemImgSrc} alt={itemName} />
      <p>{itemName}</p>
      <input type="number" min="0" name="quantity" defaultValue={quantity} />

      <p>{totalPrice}$</p>

      <button id={id} onClick={deleteItem}>
        Delete
      </button>
    </div>
  );
};

export { ItemCart };
