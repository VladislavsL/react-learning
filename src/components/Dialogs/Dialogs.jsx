import React from "react";
import ReactDOM from "react-dom";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
const Dialogs = props => {

  let dialogs = [
    {
      id: 1,
      name: "Elina"
    },
    {
      id: 2,
      name: "Dima"
    },
    {
      id: 3,
      name: "Vlad"
    },
    {
      id: 4,
      name: "Amelija"
    },
    {
      id: 5,
      name: "Oliver"
    },
    {
      id: 6,
      name: "Brrrrrrrr"
    }
  ];

  let messages = [
    {
      id: 1,
      message: "oyoyoyoyoy"
    },
    {
      id: 2,
      message: "Elsdfdddddfsdfsdf"
    },
    {
      id: 3,
      message: "NAD SD SD fds sdf sdf"
    },
    {
      id: 4,
      message: "wer ert ert ert ert"
    }
  ];
 
 let messagesElements = messages.map(message=> (
          <Message message={message.message} id={message.id} />
        ))
  
  let dialogsElements = dialogs.map(dialog => (
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
