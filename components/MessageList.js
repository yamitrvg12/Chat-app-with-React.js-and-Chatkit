import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";
import Message from './Message';

class MessageList extends React.Component {
  componentWillUpdate() {
    this.shouldScrollToBottom =
      this.node.scrollTop + this.node.clientHeight + 300 >=
      this.node.scrollHeight;
  }

  componentDidUpdate() {
    if (this.shouldScrollToBottom) {
      this.node.scrollTop = this.node.scrollHeight;
    }
  }

  render() {
    const item = (message, index) => {
      return (
        <Message
          key={index}
          username={message.senderId}
          text={message.text}
        />
      );
    };

    return (
      <div ref={(node) => { this.node = node; }} className="message-list">
        {this.props.messages.map((message, index) => item(message, index))}
      </div>
    );
  }
}

MessageList.propTypes = {
  messages: PropTypes.array.isRequired,
};

export default MessageList;
