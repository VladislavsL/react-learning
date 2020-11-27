import React from "react";
import ReactDOM from "react-dom";
import styles from "./DialogItem.module.css";
import { NavLink } from "react-router-dom";


const DialogItem = props => {
  return (
    <div className={styles.dialog}>
      <NavLink activeClassName={styles.active} to={"/dialogs/" + props.id}> {props.name}</NavLink>
    </div>
  );
};

export default DialogItem;
