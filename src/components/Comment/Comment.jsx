import React from "react";
import PostAuthor from "../PostAuthor/PostAuthor";

const Comment = ({ comment }) => {
  return (
    <article className="comment">
      <PostAuthor
        name={comment.user.username}
        date={comment.date}
        avatar={comment.user.avatar}
      />
      <p>{comment.content}</p>
    </article>
  );
};

export default Comment;
