import React, { useState } from "react";
import { BiPlus, BiSolidUserCircle } from "react-icons/bi";
import UserCard from "./UserCard";
import "../styles/Sidebar.css";

const Sidebar = ({ uniqueTitles, localUniqueTitles, createNewChat, backToHistoryPrompt, isShowSidebar, toggleSidebar }) => {
  const [isUserCardVisible, setIsUserCardVisible] = useState(false);

  const user = {
    name: "ghita",
    email: "ghita@gmail.com",
  };

  const handleUserClick = () => {
    setIsUserCardVisible(!isUserCardVisible);
  };

  const closeUserCard = () => {
    setIsUserCardVisible(false);
  };

  return (
    <section className={`sidebar ${isShowSidebar ? "open" : ""}`}>
      <div >
        <div className="sidebar-info-user" onClick={handleUserClick} role="button">
          <BiSolidUserCircle size={20} />
          <p>User</p>
        </div>
      </div>
      {isUserCardVisible && <UserCard user={user} onClose={closeUserCard} />}


      <div className="sidebar-info">
      </div>

        <div className="sidebar-history">
          {uniqueTitles.length > 0 && (
            <>
              <p>Ongoing</p>
              <ul>
                {uniqueTitles.map((uniqueTitle, idx) => (
                  <li key={idx} onClick={() => backToHistoryPrompt(uniqueTitle)}>
                    {uniqueTitle}
                  </li>
                ))}
              </ul>
            </>
          )}
          {localUniqueTitles.length > 0 && (
            <>
              <p>Previous</p>
              <ul>
                {localUniqueTitles.map((uniqueTitle, idx) => (
                  <li key={idx} onClick={() => backToHistoryPrompt(uniqueTitle)}>
                    {uniqueTitle}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      <div className="sidebar-header" onClick={createNewChat} role="button">
        <BiPlus size={20} />
        <button>New Chat</button>
      </div>
      
    </section>
  );
};

export default Sidebar;
