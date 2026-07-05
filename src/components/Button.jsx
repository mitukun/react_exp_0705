import React from "react";
// moduleと記載したcssは使いたい部品で、読み込む必要があります！必ずです！😊
import styles from "./Button.module.css";

const Button = ({ label, variant = "primary", icon }) => {
  return (
    <button className={`${styles.button} ${styles[variant]}`}>
      {icon}
      {label}
    </button>
  );
};

export default Button;
