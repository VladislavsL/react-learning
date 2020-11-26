import React from "react";
import ReactDOM from "react-dom";
import styles from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = props => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={styles.dialog + " " + styles.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = props => {
  return <div className={styles.message}>{props.message}</div>;
};

const Dialogs = props => {

  let dialogsData = [
{
  id: 1,
  name: 'Dima',
},
{
  id: 2,
  name: 'Elina',
},
{
  id: 3,
  name: 'Vlad',
},
{
  id: 4,
  name: 'Amelija',
},
{
  id: 5,
  name: 'Oliver',
},
{
  id: 6,
  name: 'Brrrrrrrr',
},
];

  let messagesData = [
{
  id: 1,
  message: 'oyoyoyoyoy',
},
{
  id: 2,
  message: 'Elsdfdddddfsdfsdf',
},
{
  id: 3,
  message: 'NAD SD SD fds sdf sdf',
},
{
  id: 4,
  message: 'wer ert ert ert ert',
},
];

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
      </div>
      <div className={styles.messages}>
        <Message message={messagesData[0].message} />
        <Message message={messagesData[2].message} />
      </div>
    </div>
  );
};

export default Dialogs;
