import React, { useState } from "react";
import "./Conversation.css";
import Message from "../Message/Message";
import MessageInput from "../MessageInput/MessageInput";
import { MoonStar, PanelBottomClose } from "lucide-react";

function Conversation() { 

  const [messages, setMessages] = useState([
    {
      id: 1,
      avatar: "L",
      content:
        "I bought a product from your store in November ",
      time: "1min",
      isUser: true,
    },
    {
      id: 2,
      avatar: "S",
      content: "Let me just look into this for you, Luis.",
      time: "Seen · 1min",
      isUser: false,
    },
  ]);

  const fakeResponses = [
    "Thanks for your patience, Luis. I've processed your refund.",
    "Could you please provide your order number?",
    "Our records show the product is eligible for return within 30 days.",
    "I'll escalate this to our refund team and get back shortly.",
  ];

  const handleSendMessage = (userMessage) => {
    if (!userMessage.trim()) return;

    const newUserMessage = {
      id: messages.length + 1,
      avatar: "L",
      content: userMessage,
      time: "Just now",
      isUser: true,
    };

    setMessages((prev) => [...prev, newUserMessage]);

    setTimeout(() => {
      const randomResponse =
        fakeResponses[Math.floor(Math.random() * fakeResponses.length)];

      const newAiMessage = {
        id: messages.length + 2,
        avatar: "S",
        content: randomResponse,
        time: "Just now",
        isUser: false,
      };

      setMessages((prev) => [...prev, newAiMessage]);
    }, 1000);
  };

  return (
    <div className="conversation">
      <div className="header-center">
        <h2 className="con-heading">Luis Easton</h2>

        <div className="con-buttons">
          <button className="more-button">•••</button>
          <button className="theme-button">
            <MoonStar />
          </button>
          <button className="close-button">
            <div className="close-icon">
              <PanelBottomClose size={18} />
            </div>
            <div className="close-text">Close</div>
          </button>
        </div>
      </div>

      <div className="message-list">
        {messages.map((message) => (
          <Message
            key={message.id}
            avatar={message.avatar}
            content={message.content}
            time={message.time}
            isUser={message.isUser}
          />
        ))}
      </div>

      <MessageInput onSend={handleSendMessage} />
    </div>
  );
}

export default Conversation;
