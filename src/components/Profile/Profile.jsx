import React from "react";
import styles from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo"


const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.state} addPost={props.addPost}/>
    </div>
  )
}

export default Profile;