import React from "react";
// moduleと記載したcssは使いたい部品で、読み込む必要があります！必ずです！😊
import styles from "./ProductCard.module.css";
import { Package, Pencil, BicepsFlexed } from "lucide-react";

const ProductCard = ({ name, price, stock }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.name}>
        <Package size={18} />
        {name}
      </h2>
      <p className={styles.price}>¥{price}</p>
      <p className={styles.stock}>在庫 {stock}</p>

      <button className={styles.button}>
        <BicepsFlexed />
        <Pencil color="yellow" size={14} /> 編集
      </button>
    </div>
  );
};

export default ProductCard;
