import React from "react";
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      My posts
      <div className={}>
        <textarea />
        <button>Add post</button>
        <button>Delete post </button>
      </div>
      <div className={styles.posts}>
        <Post message='Hi, how are you?' likesCount='3' />
        <Post message="It's my first page!" likesCount='4'/>
      </div>
    </div>
  )
}

export default MyPosts;