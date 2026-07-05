import React from "react";
import { Inbox } from "lucide-react";
// moduleと記載したcssは使いたい部品で、読み込む必要があります！必ずです！😊
import styles from "./EmptyState.module.css";

const EmptyState = ({ message }) => {
  return (
    <div className={styles.empty}>
      <Inbox size={32} />
      <p>{message}</p>
    </div>
  );
};

export default EmptyState;
