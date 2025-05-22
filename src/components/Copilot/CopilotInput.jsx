import React from "react";

function CopilotInput({ input, setInput, handleSend, loading }) {
  function handleKeyDown(e) {
    if (e.key === "Enter") handleSend();
  }

  return (
    <div className="copilot-input">
      <input
        type="text"
        placeholder="Ask a question..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={loading}
      />
      <button className="copilot-send" onClick={handleSend} disabled={loading}>
        ↑
      </button>
    </div>
  );
}

export default CopilotInput;
