import React from "react";
import "../style/sidebar.css";

import Menu from "../assets/menu_icon.png";
import Plus from "../assets/plus_icon.png";
import MessageIcon from "../assets/message_icon.png";
import Question from "../assets/question_icon.png";
import Histsory from "../assets/history_icon.png";
import Setting from "../assets/setting_icon.png";
function sidebar() {
  return (
    <div className="sidebar">
      <div className="top">
        <img src={Menu} alt="" className="menu" />
        <div className="new-chat">
          <img src={Plus} alt="" />
          <p>Newly Chat</p>
        </div>
      </div>

      <div className="recent">
        <p className="recent-title">Recent</p>
        <div className="recent-entry">
          <img src={MessageIcon} alt="12" />
          <p>What is react...</p>
        </div>
      </div>

      {/* Bottom Part */}
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={Question} alt="" />
          <p>Help</p>
        </div>
        <div className="bottom-item recent-entry">
          <img src={Histsory} alt="" />
          <p>Activity</p>
        </div>
        <div className="bottom-item recent-entry">
          <img src={Setting} alt="" />
          <p>Settings</p>
        </div>
      </div>
    </div>
  );
}

export default sidebar;