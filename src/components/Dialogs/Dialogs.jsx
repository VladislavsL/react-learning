import React from "react";
import ReactDOM from "react-dom";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import dialogss from "../../index.js";
import messages from "../../index.js";



const Dialogs = (props) => {
 
let messagesElements = props.messages.map(message=> (
          <Message message={message.message} id={message.id} />
        ))
  
 let dialogsElements = props.dialogs.map(dialog => (
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
