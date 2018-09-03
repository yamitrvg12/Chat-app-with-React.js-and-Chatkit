import React from 'react';
import MessageList from './components/MessageList';
import SendMessageForm from './components/SendMessageForm';
import RoomList from './components/RoomList';
import NewRoomForm from './components/NewRoomForm';
import { ChatManager, TokenProvider } from '@pusher/chatkit';
import { tokenUrl, instanceLocator } from './config';

const tokenProvider = new TokenProvider({
  url: tokenUrl,
});

const chatManager = new ChatManager({
  instanceLocator,
  userId: 'yamitrvg12',
  tokenProvider,
});

class App extends React.Component {
  constructor() {
    super(); // we are calling the constructor function in the React.Component
    this.state = {
      messages: [],
      joinableRooms: [],
      joinedRooms: [],
      roomId: null,
    };
    this.currentUser = null;
    this.sendMessage = this.sendMessage.bind(this);
    this.subscribeToRoom = this.subscribeToRoom.bind(this);
    this.getRooms = this.getRooms.bind(this);
  }

  componentDidMount() {
    chatManager
      .connect()
      .then((currentUser) => {
        // The currentUser is our interface for talking with the Chat API.
        this.currentUser = currentUser;
        this.getRooms();
      })
      .catch(error => console.log('Error on Connecting ', error));
  }

  getRooms() {
    this.currentUser.getJoinableRooms()
      .then((joinableRooms) => {
        this.setState({
          joinableRooms,
          joinedRooms: this.currentUser.rooms,
        });
      })
      .catch(error => console.log('Error on  joinableRooms', error));
  }

  subscribeToRoom(roomId) {
    this.setState({
      messages: [],
    });
    this.currentUser.subscribeToRoom({
      roomId,
      hooks: {
        onNewMessage: (message) => {
          this.setState({
            // new array (copy) with NO reference to the previous
            messages: [...this.state.messages, message],
          });
        },
      },
    })
      .then((room) => {
        this.setState({
          roomId: room.id,
        });
        this.getRooms();
      })
      .catch(error => console.log('Error on subscribing to room: ', error));
  }

  sendMessage(text) {
    this.currentUser.sendMessage({
      text,
      roomId: this.state.roomId,
    });
  }

  render() {
    return (
      <div className="app">
        <RoomList
          roomId={this.state.roomId}
          subscribeToRoom={this.subscribeToRoom}
          rooms={[...this.state.joinableRooms, ...this.state.joinedRooms]}
        />
        <MessageList messages={this.state.messages} />
        <SendMessageForm sendMessage={this.sendMessage} />
        <NewRoomForm />
      </div>
    );
  }
}

export default App;
