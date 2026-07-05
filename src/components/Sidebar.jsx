import React from "react";
import { LayoutDashboard, Package, Settings } from "lucide-react";
// moduleと記載したcssは使いたい部品で、読み込む必要があります！必ずです！😊
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  const menu = [
    { icon: <LayoutDashboard size={18} />, label: "ダッシュボード" },
    { icon: <Package size={18} />, label: "商品" },
    { icon: <Settings size={18} />, label: "設定" },
  ];

  return (
    <aside className={styles.sidebar}>
      <p className={styles.logo}>🛒 MyShop</p>
      {menu.map((item) => (
        <div key={item.label} className={styles.item}>
          {item.icon}
          <span>{item.label}</span>
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;
