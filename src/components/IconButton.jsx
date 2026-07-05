import React from "react";
// moduleと記載したcssは使いたい部品で、読み込む必要があります！必ずです！😊
import styles from "./IconButton.module.css";

const IconButton = ({ icon }) => {
  return <button className={styles.iconBtn}>{icon}</button>;
};

export default IconButton;
