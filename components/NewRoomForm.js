import React from 'react';
import PropTypes from 'prop-types';

class NewRoomForm extends React.Component {
  constructor() {
    super();
    this.state = {
      roomName: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      roomName: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createRoom(this.state.roomName);
    this.setState({
      roomName: '',
    });
  }

  render() {
    return (
      <div className="new-room-form">
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            value={this.state.roomName}
            type="text"
            placeholder="Create a room"
            required
          />
          <button id="create-room-btn" type="submit">+</button>
        </form>
      </div>
    );
  }
}

NewRoomForm.propTypes = {
  createRoom: PropTypes.func.isRequired,
};

export default NewRoomForm;
