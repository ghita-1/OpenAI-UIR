import React from "react";
import { MdOutlineArrowLeft, MdOutlineArrowRight } from "react-icons/md";
import "../styles/ChatHeader.css";

const ChatHeader = ({ isShowSidebar, toggleSidebar }) => {
  return (
    <div className="main-header">
      {isShowSidebar ? (
        <MdOutlineArrowRight className="burger" size={28.8} onClick={toggleSidebar} />
      ) : (
        <MdOutlineArrowLeft className="burger"  size={28.8} onClick={toggleSidebar} />
      )}
    </div>
  );
};

export default ChatHeader;
