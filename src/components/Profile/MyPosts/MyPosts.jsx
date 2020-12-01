import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = props => {
  let postsElements = props.posts.map(postItem => (
    <Post
      id={postItem.id}
      post={postItem.post}
      likesCount={postItem.likesCount}
    />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    debugger;
    let text = newPostElement.current.value;
    props.addPost(text);
  };

  return (
    <div className={styles.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement} />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={styles.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
