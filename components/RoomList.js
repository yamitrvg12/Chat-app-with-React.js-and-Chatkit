import React from 'react';
import PropTypes from 'prop-types';

const RoomList = ({ rooms, subscribeToRoom }) => {
  return (
    <div className="rooms-list">
      <ul>
        <h3>Your Rooms: </h3>
        {rooms.map((room) => {
          return (
            <li key={room.id} className="room">
              <button onClick={() => { subscribeToRoom(room.id); }}>
                {room.name}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

RoomList.propTypes = {
  rooms: PropTypes.array.isRequired,
  subscribeToRoom: PropTypes.func.isRequired,
};

export default RoomList;
