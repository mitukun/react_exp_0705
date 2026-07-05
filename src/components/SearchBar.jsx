import React from "react";
import { Search } from "lucide-react";
// moduleと記載したcssは使いたい部品で、読み込む必要があります！必ずです！😊
import styles from "./SearchBar.module.css";

const SearchBar = ({ placeholder }) => {
  return (
    <div className={styles.search}>
      <Search size={16} />
      <input className={styles.input} placeholder={placeholder} />
    </div>
  );
};

export default SearchBar;
