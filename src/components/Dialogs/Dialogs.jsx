import React from "react";
import ReactDOM from "react-dom";
import styles from "./Dialogs.module.css";

const Dialogs = props => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        <div className={styles.dialog + ' ' + styles.active}>Dima</div>
        <div className={styles.dialog}>Vlad</div>
        <div className={styles.dialog}>Olier</div>
        <div className={styles.dialog}>Elina</div>
        <div className={styles.dialog}>Amelija</div>
      </div>
      <div className={styles.messages}>
        <div className={styles.message}>HI</div>
        <div className={styles.message}>HOW asdas dasd</div>
        <div className={styles.message}>HI DHS HSDH D H</div>
      </div>
    </div>
  );
};

export default Dialogs;
