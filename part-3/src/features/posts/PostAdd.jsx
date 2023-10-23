import { useState } from "react";
import { useDispatch } from "react-redux";
import { postAdded } from "./postsSlice";

const PostAdd = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch();

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    var id = Date.now();
    if (title && content) {
      dispatch(
        postAdded({
          id,
          title,
          content,
        })
        
      );
      console.log(`Post Added Successfully! with id: ${id}`)
      setTitle("");
      setContent("");
    }
  };
  return (
    <section>
      <h2>PostAdd</h2>
      {/* Form */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button type="submit">Save Post</button>
      </form>
    </section>
  );
};

export default PostAdd;
