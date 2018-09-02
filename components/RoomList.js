import React from 'react';
import PropTypes from 'prop-types';

const RoomList = ({ rooms }) => {
  return (
    <div className="rooms-list">
      <ul>
        <h3>Your Rooms: </h3>
        {rooms.map(room => <li key={room.id} className="room">{room.name}</li>)}
      </ul>
    </div>
  );
};

RoomList.propTypes = {
  rooms: PropTypes.array.isRequired,
};

export default RoomList;
