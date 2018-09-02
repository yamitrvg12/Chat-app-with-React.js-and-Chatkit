import React from 'react';
import PropTypes from "prop-types";

const Message = ({ username, text }) => {
  return (
    <div className="message">
      <div className="message-username">{username}</div>
      <div className="message-text">{text}</div>
    </div>
  );
};

Message.propTypes = {
  username: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Message;
