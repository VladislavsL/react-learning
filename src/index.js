import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./style.css";

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

  let posts = [
    {
      id: 1,
      post: "My first post?!",
      likesCount: 3
    },
    {
      id: 2,
      post: "And the second post!?",
      likesCount: 28
    }
];


const root = document.getElementById("root");

ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages}/>, root);
