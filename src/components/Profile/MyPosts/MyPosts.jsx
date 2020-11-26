import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
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

  let postsElements = posts.map(postItem => (
    <Post id={postItem.id} post={postItem.post} likesCount={postItem.likesCount} />
  ));

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
      <div className={styles.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
