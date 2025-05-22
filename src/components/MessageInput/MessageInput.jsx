import React, { useState, useRef, useEffect } from "react";
import "./MessageInput.css";
import { SaveAll, Zap, Laugh, MessageSquareText } from "lucide-react";

const EMOJIS = ["😀", "😂", "😍", "😎", "😢", "👍", "🎉", "🔥", "❤️"];

function MessageInput({ onSend, onFileSelect }) {
  const [input, setInput] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const emojiPickerRef = useRef(null);
  const fileInputRef = useRef(null); 

  const handleSend = () => {
    if (!input.trim()) return;
    onSend(input);
    setInput("");
    setShowEmojiPicker(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  const addEmoji = (emoji) => {
    const inputEl = document.querySelector(".input-field input");
    const start = inputEl.selectionStart;
    const end = inputEl.selectionEnd;
    const newText = input.slice(0, start) + emoji + input.slice(end);
    setInput(newText);
    setTimeout(() => {
      inputEl.focus();
      inputEl.selectionStart = inputEl.selectionEnd = start + emoji.length;
    }, 0);
    setShowEmojiPicker(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        emojiPickerRef.current &&
        !emojiPickerRef.current.contains(event.target) &&
        !event.target.closest(".laugh-icon")
      ) {
        setShowEmojiPicker(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleFileChange = (e) => {
    if (onFileSelect) {
      onFileSelect(e.target.files);
    }
    e.target.value = null; 
  };

  return (
    <div className="message-input">
      <div className="input-container">
        <button className="chat-button">
          <div className="chat-icon">
            <MessageSquareText size={14} />
          </div>
          <select className="dropdown_chat" defaultValue="chat">
            <option value="chat">Chat</option>
            <option value="message">Message</option>
            <option value="voicecall">Voice Call</option>
          </select>
        </button>

        <div className="input-field">
          <input
            type="text"
            placeholder="Use ⌘K for shortcuts"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>

      <div className="input-actions">
        <div className="input-icons">
          <Zap size={20} />

          <button
            className="file-select-button"
            type="button"
            onClick={() => fileInputRef.current.click()}
            aria-label="Select files"
          >
            <SaveAll size={20} />
          </button>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileChange}
            multiple
          />

          <Laugh
            size={20}
            className="laugh-icon"
            style={{ cursor: "pointer" }}
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
          />
        </div>

        <button className="send-button" onClick={handleSend}>
          Send
        </button>
      </div>

      {showEmojiPicker && (
        <div className="emoji-picker" ref={emojiPickerRef}>
          {EMOJIS.map((emoji) => (
            <span
              key={emoji}
              className="emoji"
              onClick={() => addEmoji(emoji)}
              role="button"
              tabIndex={0}
            >
              {emoji}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default MessageInput;
 