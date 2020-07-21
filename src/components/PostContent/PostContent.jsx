import React from "react";
import PropTypes from "prop-types";

const PostContent = ({ srclogo, title, content }) => {
  return (
    <section className="post-content">
      <img className="post-img" src={srclogo} alt="Logo de React" />
      <div className="post-text-container">
        <h1 className="post-title">{title}</h1>
        <p className="post-text">{content}</p>
        <a href="/" className="read-more">
          Ver más
        </a>
      </div>
    </section>
  );
};

PostContent.propTypes = {
  srclogo: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string
};
export default PostContent;
