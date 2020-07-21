import React from "react";
import Comment from "../Comment/Comment";

const Comments = ({ comments }) => {
  return (
    <section className="comments">
      <h2 className="comments-title">Comentarios</h2>
      {comments.map(comment => (
        <Comment comment={comment} />
      ))}
    </section>
  );
};

export default Comments;
