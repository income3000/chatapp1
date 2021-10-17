
import './App.css';
import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
function App() {
  if(!localStorage.getItem('username')) return <LoginForm />
  return (
    <ChatEngine 
      height='100vh'
      projectID='c4617c1b-b106-4f65-bcff-5651a09ccd2a'
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps}/>}
    />
  );
}

export default App;
