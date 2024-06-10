import React from "react";
import { BiSend } from "react-icons/bi";
import "../styles/ChatInput.css";

const ChatInput = ({ isResponseLoading, text, setText, errorText, submitHandler }) => {
  return (
    <div className="form-container">
      <input
        type="text"
        placeholder="Type your message..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            submitHandler(e);
          }
        }}
        disabled={isResponseLoading}
      />
      <BiSend size={28} onClick={submitHandler} />
      {errorText && <p className="errorText">{errorText}</p>}
    </div>
  );
};

export default ChatInput;
