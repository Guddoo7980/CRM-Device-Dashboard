import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.scss";

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <h3>Device CRM</h3>
      <nav>
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="/installation">Installation</NavLink>
        <NavLink to="/service">Service Logs</NavLink>
        <NavLink to="/contracts">AMC/CMC</NavLink>
        <NavLink to="/alerts">Alerts</NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;
