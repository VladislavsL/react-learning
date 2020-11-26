import React from "react";
import styles from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div>
      <div className={styles.bgImage} />
      <div>
        ava + descr
      </div>
      <MyPosts />
    </div>
  )
}

export default Profile;