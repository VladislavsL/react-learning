import React from "react";
import ReactDOM from "react-dom";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
 debugger;
let messagesElements = props.dialogsPage.messages.map(message=> (
          <Message message={message.message} id={message.id} />
        ))
  
 let dialogsElements = props.dialogsPage.dialogs.map(dialog => (
          <DialogItem name={dialog.name} id={dialog.id} />
        ))

 return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={styles.messages}>
      {messagesElements}
      </div>
    </div>
  );
};

export default Dialogs;
