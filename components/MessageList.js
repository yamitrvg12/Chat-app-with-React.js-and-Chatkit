import React from 'react';
import PropTypes from "prop-types";
import Message from './Message';

class MessageList extends React.Component {
  componentWillUpdate() {
    if (this.props.roomId) {
      this.shouldScrollToBottom =
        this.node.scrollTop + this.node.clientHeight + 300 >=
        this.node.scrollHeight;
    }
  }

  componentDidUpdate() {
    if (this.shouldScrollToBottom) {
      this.node.scrollTop = this.node.scrollHeight;
    }
  }

  render() {
    if (!this.props.roomId) {
      return (
        <div className="message-list">
          <div className="join-room">
            &larr; Join a room!
          </div>
        </div>
      );
    }

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

MessageList.defaultProps = {
  roomId: null,
};

MessageList.propTypes = {
  messages: PropTypes.array.isRequired,
  roomId: PropTypes.number,
};

export default MessageList;
