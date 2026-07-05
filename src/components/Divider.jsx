import React from "react";
// moduleと記載したcssは使いたい部品で、読み込む必要があります！必ずです！😊
import styles from "./Divider.module.css";

const Divider = () => {
  return <hr className={styles.divider} />;
};

export default Divider;
