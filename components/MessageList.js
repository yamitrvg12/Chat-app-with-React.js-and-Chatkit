import React from 'react';
import PropTypes from "prop-types";

const MessageList = ({ messages }) => {
  return (
    <div className="message-list">
      {messages.map((message, index) => {
        return (
          <div key={index} className="message">
            <div className="message-username">{message.senderId}</div>
            <div className="message-text">{message.text}</div>
          </div>
        );
      })}
    </div>
  );
};

MessageList.propTypes = {
  messages: PropTypes.array.isRequired,
};

export default MessageList;
