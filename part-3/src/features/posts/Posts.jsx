import { postAdded, postUpdated, postDeleted } from "./postsSlice";
import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  const [newPostDetails, setNewPostDetails] = useState({
    title: "",
    content: "",
  });

  const newPostDetailsChanged = (e) => {
    setNewPostDetails({ ...newPostDetails, [e.target.id]: e.target.value });
  }

  useEffect(() => {
    console.log("New post details: ", newPostDetails);
  }, [newPostDetails]);

  return (
    <section>
      <h2>Posts</h2>
      <div className="posts">
        {/* Render the posts here */}
        {posts.map((post) => (
          <article className="post-excerpt" key={post.id}>
            <h3>{post.title}</h3>
            <p className="post-content">{post.content.substring(0, 100)}</p>
            <button
              className="button muted-button"
              onClick={() =>
                dispatch(
                  postUpdated({
                    id: post.id,
                    title: "Updated",
                    content: "Updated",
                  })
                )
              }
            >
              Edit
            </button>
            <button
              className="button muted-button"
              onClick={() => dispatch(postDeleted({ id: post.id }))}
            >
              Delete
            </button>
          </article>
        ))}
      </div>

      <div>
        <h2>Add a New Post</h2>
        <form>
          <label htmlFor="postTitle">Post Title:</label>
          <input type="text" id="postTitle" name="postTitle" />
          <label htmlFor="postContent">Content:</label>
          <textarea id="postContent" name="postContent" />
          <button
            type="button"
            onClick={() =>
              dispatch(
                postAdded({
                  id: "3",
                  title: "Third Post",
                  content: "Third Post",
                })
              )
            }
          >
            Add Post
          </button>
        </form>
      </div>
    </section>
  );
};

export default Posts;
