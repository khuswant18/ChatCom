import React, { useEffect, useRef } from "react";

function CopilotChat({ messages, loading }) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const noUserMessages = !messages.some((msg) => msg.role === "user");

  return (
    <div className="copilot-content">
      {noUserMessages && (
        <div className="intro-block"> 
          <img className="intercom-img-2" src="/images/intercom_logo.png" alt="intercom logo" />
          <h3 className="copilot-title">Hi, I'm Fin AI Copilot</h3>
          <p className="copilot-description">Ask me anything about this conversation.</p>
        </div>
      )}

      <div className="copilot-chat">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`message ${msg.role === "user" ? "user" : "assistant-message"}`}
          >
            {msg.content} 
          </div>
        ))}
        {loading && <div className="assistant-message">...</div>}
        <div ref={bottomRef} />
      </div>
    </div>
  );
}

export default CopilotChat;
