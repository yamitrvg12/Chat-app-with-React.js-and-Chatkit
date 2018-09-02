import React from 'react';
import PropTypes from 'prop-types';

class SendMessageForm extends React.Component {
  constructor() {
    super();
    this.state = {
      message: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      message: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    /** Send off the message */
    this.props.sendMessage(this.state.message);

    this.setState({
      message: '',
    });
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className="send-message-form"
      >
        <input
          onChange={this.handleChange}
          value={this.state.message}
          placeholder="SendMessageForm"
          type="text"
        />
      </form>
    );
  }
}

SendMessageForm.propTypes = {
  sendMessage: PropTypes.func.isRequired,
};

export default SendMessageForm;
