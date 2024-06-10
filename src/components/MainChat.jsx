import React, { useState, useEffect } from "react";
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
// import ChatInput from "./ChatInput";
import "../styles/MainChat.css";
import chatgptLogo from "../assets/usr.jfif";

// {
//   currentTitle,
//     currentChat,
//     isResponseLoading,
//     text,
//     setText,
//     errorText,
//     submitHandler,
//     isShowSidebar,
//     toggleSidebar,
// }

const MainChat = () => {

  const [chat, setChat] = useState([]);
  function createTask(chat) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(
        {
          chat
        }
      )
    };
    fetch('https://localhost:7246/api/Chatbot/ask', )
      .then(response => response.json())
      .then(data => {

        // setChat(data)
        console.log(data)
      }
     );
  }

  useEffect(() => {
    createTask();
  }, []);



  return (
    <section className="main">
      {!currentTitle && (
        <div className="empty-chat-container">
          <img src={chatgptLogo} width={55} height={55} alt="Chat" />
          <h1>AZUL Chat </h1>
          <h3>How can I help you today?</h3>
        </div>
      )}
      <ChatHeader
        isShowSidebar={isShowSidebar}
        toggleSidebar={toggleSidebar}
      />
      <ChatMessages currentChat={currentChat} />
      {/* <ChatInput
        isResponseLoading={isResponseLoading}
        text={text}
        setText={setText}
        errorText={errorText}
        submitHandler={submitHandler}
      /> */}
    </section>
  );
};

export default MainChat;
