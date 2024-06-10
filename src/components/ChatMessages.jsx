import React from "react";
import "../styles/ChatMessages.css";
import chatgptLogo from "../assets/usr.jfif";
import user from "../assets/user.png";


const ChatMessages = ({ currentChat }) => {
  return (
    <div className="chat-messages">
      <ul>
        {currentChat.map((chat, idx) => (
          <li key={idx}>
            <img src={chat.role === "user" ? user : chatgptLogo} alt={chat.role} />
            <div>
              <div className="role-title">{chat.role}</div>
              <div>{chat.content}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatMessages;
