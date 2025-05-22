import React, { useState } from "react";
import "./Copilot.css";
import CopilotHeader from "./CopilotHeader";
import CopilotChat from "./CopilotChat";
import CopilotInput from "./CopilotInput";

function Copilot() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([{ role: "assistant", content: "" }]);
  const [loading, setLoading] = useState(false);

  const dummyResponses = [
    "Sure! Let me help you with that.",
    "I'm here to assist. Can you clarify a bit more?",
    "Interesting question! Let me think...",
    "Thanks for asking. Here's what I found.",
    "That’s a good one! Here’s my take on it.",
  ];

  function getRandomResponse() {
    const index = Math.floor(Math.random() * dummyResponses.length);
    return dummyResponses[index];
  }

  function handleSend() {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    setTimeout(() => {
      const assistantMessage = { role: "assistant", content: getRandomResponse() };
      setMessages([...updatedMessages, assistantMessage]);
      setLoading(false);
    }, 1000);
  }

  return (
    <div className="copilot">
      
      <CopilotHeader />
      <CopilotChat messages={messages} loading={loading} />
      <CopilotInput input={input} setInput={setInput} handleSend={handleSend} loading={loading} />
    </div>
  ); 
}

export default Copilot;
