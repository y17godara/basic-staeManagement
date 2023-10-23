import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { postDeleted } from "./postsSlice";

const PostList = () => {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  // State to track sorting order (newest or oldest)
  const [sortingOrder, setSortingOrder] = useState("newest");

  // Sort the posts based on the sorting order
  const sortedPosts = [...posts].sort((a, b) => {
    if (sortingOrder === "newest") {
      return b.id - a.id; // Sort by descending ID for newest first
    } else {
      return a.id - b.id; // Sort by ascending ID for oldest first
    }
  });

  const renderPosts = sortedPosts.map((post) => (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <p className="post-content">{post.content.substring(0, 100)}</p>
      <button
        className="button"
        onClick={() => dispatch(postDeleted({ id: post.id }))}
      >
        Delete
      </button>
    </article>
  ));

  // Function to toggle sorting order
  const toggleSortingOrder = () => {
    setSortingOrder(sortingOrder === "newest" ? "oldest" : "newest");
  };

  return (
    <section>
      <h2>Posts</h2>
      <div>
        <button className="button" onClick={toggleSortingOrder}>
          Sort {sortingOrder === "newest" ? "Oldest First" : "Newest First"}
        </button>
      </div>
      {renderPosts}
    </section>
  );
};

export default PostList;