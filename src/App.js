import logo from './logo.svg';
import './App.css';
import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
function App() {
  return (
    <ChatEngine 
      height='100vh'
      projectID='c4617c1b-b106-4f65-bcff-5651a09ccd2a'
      userName='income3000'
      userSecret='123123'
      renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps}/>}
    />
  );
}

export default App;
