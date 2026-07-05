import React from "react";
// moduleと記載したcssは使いたい部品で、読み込む必要があります！必ずです！😊
import styles from "./PriceTag.module.css";

const PriceTag = ({ price }) => {
  return <span className={styles.price}>¥{price.toLocaleString()}</span>;
};

export default PriceTag;
