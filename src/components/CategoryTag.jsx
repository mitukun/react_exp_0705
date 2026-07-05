import React from "react";
// moduleと記載したcssは使いたい部品で、読み込む必要があります！必ずです！😊
import styles from "./CategoryTag.module.css";

const CategoryTag = ({ label }) => {
  return <span className={styles.tag}>{label}</span>;
};

export default CategoryTag;
