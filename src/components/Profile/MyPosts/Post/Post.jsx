import React from "react";
import styles from "./Post.module.css";

const Post = props => {
  return (
    <div className={styles.item}>
      <img src="https://pyxis.nymag.com/v1/imgs/630/6e0/eb215ad90cd826b9e57ff505f54c5c7228-07-avatar.rsquare.w700.jpg" />
      {props.post}
      <span className={styles.likes}>Likes: {props.likesCount}</span>
    </div>
  );
};

export default Post;
