import React from "react";
// moduleと記載したcssは使いたい部品で、読み込む必要があります！必ずです！😊
import styles from "./Toolbar.module.css";

const Toolbar = ({ children }) => {
  return <div className={styles.toolbar}>{children}</div>;
};

export default Toolbar;
