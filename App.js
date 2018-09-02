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
    };
  }

  componentDidMount() {
    chatManager
      .connect()
      .then((currentUser) => {
        // The currentUser is our interface for talking with the Chat API.
        currentUser.subscribeToRoom({
          roomId: 15276341,
          hooks: {
            onNewMessage: (message) => {
              this.setState({
                // new array (copy) with NO reference to the previous
                messages: [...this.state.messages, message],
              });
            },
          },
        });
      })
      .catch((error) => {
        console.log('Error ', error);
      });
  }

  render() {
    return (
      <div className="app">
        <RoomList />
        <MessageList messages={this.state.messages} />
        <SendMessageForm />
        <NewRoomForm />
      </div>
    );
  }
}

export default App;
