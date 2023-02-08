import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost, clearPost, deleteUser, toggleLike } from "./PostsSlice";

export default function PostItemRedux({ item }) {
  const dispatch = useDispatch();
  const [newPostValue, setNewPostValue] = useState("");
  // Добавляем Пост
  function addNewPost(item) {
    if (newPostValue) {
      dispatch(addPost({ newPostValue, item }));
    }
    setNewPostValue("");
  }
  return (
    <>
      <div className="postRow">
        <div className="postRow__name">{item.name}</div>
        <div className="inputRow">
          <input
            value={newPostValue}
            onChange={(e) => setNewPostValue(e.target.value)}
            type="text"
          />
          <button onClick={() => addNewPost(item)}>Add Post</button>
        </div>
        <div className="postRow__posts">
          <div>New Post: {item.post} </div>
          <button
            onClick={() => dispatch(toggleLike(item))}
            className={item.liked === true ? "active postItem" : "postItem"}
          >
            Like
          </button>
          <button onClick={() => dispatch(deleteUser(item))}>
            Delete User
          </button>
          <button onClick={() => dispatch(clearPost(item))}>Clear Post</button>
        </div>
      </div>
    </>
  );
}
