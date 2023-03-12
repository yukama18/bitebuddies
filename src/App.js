import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import Message from './components/Message';
//import toxicityDetection from './cohere/toxicityDetection4.cjs'

function App() {

  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const addMessage = () => {
    setMessageList([...messageList, {message: message}])
    //if (toxicityDetection.checkMessageToxicity(message)) {
     // setMessageList([...messageList, {message: message}])
    //}

  }

  return (
    <div className="App">

      {messageList.map((message) => {
        return <Message message={message.message}/>
      })}
    
      <input type="text" id="message" onChange={(e) => {
        setMessage(e.target.value)
      }}/>
      <button onClick={addMessage}>Send</button>


    </div>
  );
}

export default App;
//      <Chat />