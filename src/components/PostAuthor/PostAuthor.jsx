import React from "react";
import PropTypes from "prop-types";

const formatDate = date => {
  return new Intl.DateTimeFormat("es-AR").format(date);
};

const PostAuthor = ({ avatar, name, date }) => {
  return (
    <header className="post-info">
      <img className="user-avatar" src={avatar} alt={name} />
      <div className="container">
        <h3 className="username">{name}</h3>
        <p className="post-date">
          Publicado el <time>{formatDate(date)}</time>
        </p>
      </div>
    </header>
  );
};

PostAuthor.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  date: PropTypes.string
};

export default PostAuthor;
