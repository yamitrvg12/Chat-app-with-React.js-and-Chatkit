import React from 'react';
import PropTypes from 'prop-types';

const RoomList = ({ rooms, subscribeToRoom, roomId }) => {
  const orderedRooms = [...rooms].sort((a, b) => a.id - b.id);
  return (
    <div className="rooms-list">
      <ul>
        <h3>Your Rooms: </h3>
        {orderedRooms.map((room) => {
          const active = roomId === room.id ? 'active' : '';
          return (
            <li key={room.id} className={`room ${active}`}>
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
