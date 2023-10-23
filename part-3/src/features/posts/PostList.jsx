import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { postDeleted } from "./postsSlice";

const PostList = () => {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const renderPosts = posts.map((post) => (
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
  return (
    <section>
      <h2>Posts</h2>
      {renderPosts}
    </section>
  );
};

export default PostList;
