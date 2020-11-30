import React from "react";
import ReactDOM from "react-dom";
import styles from "./DialogItem.module.css";
import { NavLink } from "react-router-dom";


const DialogItem = props => {
  return (
    <div className={styles.dialog}>
      <NavLink className={styles.dialogContainer}activeClassName={styles.active} to={"/dialogs/" + props.id}><img className={styles.avatar} src={props.avatar}/> <p>{props.name}</p></NavLink>
    </div>
  );
};

export default DialogItem;
