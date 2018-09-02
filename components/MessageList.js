import React from 'react';
import PropTypes from "prop-types";
import Message from './Message';

const MessageList = ({ messages }) => {
  const item = (message, index) => {
    return <Message key={index} username={message.senderId} text={message.text} />;
  };

  return (
    <div className="message-list">
      {messages.map((message, index) => item(message, index))}
    </div>
  );
};

MessageList.propTypes = {
  messages: PropTypes.array.isRequired,
};

export default MessageList;
