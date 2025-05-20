import React from "react";
import "./Sidebar.css";
import { Webhook } from "lucide-react";
import { Redo2 } from "lucide-react";

const emails = [
  {
    id: 1,
    sender: "Luis",
    platform: "Github",
    preview: "Hey! I have a question on the...",
    time: "45min",
    unread: true,
    selected: true,
    avatar: "L",
    color: "rgb(128, 130, 255)",
  },
  {
    id: 2,
    sender: "Ivan",
    platform: "Nike",
    preview: "Hello , I want to ask that if......",
    time: "30min",
    unread: true,
    priority: true,
    avatar: "I",
    color: "rgb(255, 59, 48)",
  },
  {
    id: 3,
    sender: "Lead from New York",
    preview: "The client asked for a revised...",
    time: "26min",
    avatar: "L",
    color: "rgb(128, 130, 255)",
  },
  {
    id: 4,
    sender: "Booking API problems",
    report: true,
    preview: "Let's set up a call this week and...",
    time: "30min",
    avatar: <Webhook />,
    color: "rgb(26, 33, 61)",
  },
  {
    id: 5,
    sender: "Miracle",
    platform: "Exemplary Bank",
    preview: "Hey there, I'm here to there...",
    time: "45min",
    avatar: <Redo2 />,
  },
];

function Sidebar() {
  return (

    <div className="sidebar">
      <div className="header-left">
        <h1>Your inbox</h1>
      </div>


      <div className="dropdown-header">
        
        <select className="dropdown" defaultValue="4 open">
          <option value="option">5 open</option>
          <option value="option">closed</option>
          <option value="option">snoozed</option>
        </select>

        <select className="dropdown" defaultValue="Waiting longest">
          <option value="option">Waiting longest</option>
          <option value="option">Newest</option>
          <option value="option">Priority</option>
        </select>
      </div>

      <div className="email-list">
        {emails.map((email) => (
          <div
            key={email.id}
            className={`email-item ${email.unread ? "unread" : ""} ${
              email.selected ? "selected" : ""
            }`}
          >
            <div className="avatar" style={{ backgroundColor: email.color }}>
              {email.avatar}
            </div>
            <div className="email-content">
              
              <div className="email-header">
                <span className="sender">{email.sender} </span>
                <div className="platform">{email.platform}</div>
              </div>

              {email.report && <span className="report">Bug report</span>}

              <div className="preview">
                <p className="prompt-text">{email.preview}</p>
                <span className="time">{email.time}</span>
              </div>



            </div>
            

            {email.priority && <span className="priority-pill">3min</span>}


        </div>


        ))}

      </div>

      <div className="floating-controls">
        <button className="floating-btn">⏸</button>
        <button className="floating-btn">≡</button>
      </div>
    </div>
  );
}

export default Sidebar;
