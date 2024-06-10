import React, { useState, useEffect, useCallback } from "react";
import Sidebar from "./components/Sidebar";
import MainChat from "./components/MainChat";
import "./styles/global.css";
import "./styles/Container.css";

function App() {
  const [text, setText] = useState("");
  const [message, setMessage] = useState(null);
  const [previousChats, setPreviousChats] = useState([]);
  const [localChats, setLocalChats] = useState([]);
  const [currentTitle, setCurrentTitle] = useState(null);
  const [isResponseLoading, setIsResponseLoading] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [isShowSidebar, setIsShowSidebar] = useState(false);

  const createNewChat = () => {
    setMessage(null);
    setText("");
    setCurrentTitle(null);
  };

  const backToHistoryPrompt = (uniqueTitle) => {
    setCurrentTitle(uniqueTitle);
    setMessage(null);
    setText("");
  };

  const toggleSidebar = useCallback(() => {
    setIsShowSidebar((prev) => !prev);
  }, []);

  // useEffect(() => {
  //   const storedChats = localStorage.getItem("previousChats");

  //   if (storedChats) {
  //     setLocalChats(JSON.parse(storedChats));
  //   }
  // }, []);

  useEffect(() => {
    if (!currentTitle && text && message) {
      setCurrentTitle(text);
    }

    if (currentTitle && text && message) {
      const newChat = {
        title: currentTitle,
        role: "user",
        content: text,
      };

      const responseMessage = {
        title: currentTitle,
        role: message.role,
        content: message.content,
      };

      setPreviousChats((prevChats) => [...prevChats, newChat, responseMessage]);
      setLocalChats((prevChats) => [...prevChats, newChat, responseMessage]);

      const updatedChats = [...localChats, newChat, responseMessage];
      localStorage.setItem("previousChats", JSON.stringify(updatedChats));
    }
  }, [message, currentTitle]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!text) return;

    // Remove API call logic here

    // Example of setting a message directly for testing
    setMessage({ role: "bot", content: "This is a test response." });
  };

  const currentChat = (localChats || previousChats).filter(
    (prevChat) => prevChat.title === currentTitle
  );

  const uniqueTitles = Array.from(
    new Set(previousChats.map((prevChat) => prevChat.title).reverse())
  );

  const localUniqueTitles = Array.from(
    new Set(localChats.map((prevChat) => prevChat.title).reverse())
  ).filter((title) => !uniqueTitles.includes(title));

  return (
    <div className="container">
      <Sidebar
        uniqueTitles={uniqueTitles}
        localUniqueTitles={localUniqueTitles}
        createNewChat={createNewChat}
        backToHistoryPrompt={backToHistoryPrompt}
        isShowSidebar={isShowSidebar}
        toggleSidebar={toggleSidebar}
      />
      <MainChat
        currentTitle={currentTitle}
        currentChat={currentChat}
        isResponseLoading={isResponseLoading}
        text={text}
        setText={setText}
        errorText={errorText}
        submitHandler={submitHandler}
        isShowSidebar={isShowSidebar}
        toggleSidebar={toggleSidebar}
      />
    </div>
  );
}

export default App;
