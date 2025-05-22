import "./Message.css";

function Message({ avatar, content, time, isUser }) {
  return ( 
    <div className={`message ${isUser ? "user-message" : "support-message"}`}>
      <div className="message-avatar">{avatar}</div>
      <div className="message-content">
        <div className="message-text">
          {content}
          <div className="message-time">{time}</div>
        </div>
      </div>
    </div>
  );
}

export default Message;
