import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  let messagesData = [
{
  id: 1,
  post: 'My first post?!',
  likesCount: 0,
},
{
  id: 2,
  post: 'And the second post!?',
  likesCount: 28,
},
];

  return (
    <div className={styles.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea />
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={styles.posts}>
        <Post message={messagesData[0].post} likesCount={messagesData[0].likesCount} />
        <Post message={messagesData[1].post} likesCount={messagesData[1].likesCount} />
      </div>
    </div>
  );
};

export default MyPosts;
