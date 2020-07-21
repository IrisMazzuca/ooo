import React from "react";

const Post = ({ children }) => {
  return (
    <div className="column">
      <section className="post">{children}</section>
    </div>
  );
};

export default Post;
