import "./MessageInput.css";
import { SaveAll, Zap, Laugh, MessageSquareText ,ChevronDown} from 'lucide-react';

function MessageInput() {
  return (
    <div className="message-input">
 
      <div className="input-container">
        <button className="chat-button">
          
          <div className="chat-icon"><MessageSquareText size={14} /></div>

          <select className="dropdown_chat" defaultValue="chat">
          <option value="chat">Chat</option>
          <option value="message">Message</option>
          <option value="voicecall">Voice Call</option>
        </select>

        
        </button> 

        <div className="input-field">
          <input type="text" placeholder="Use ⌘K for shortcuts" />
        </div> 
      </div>

      <div className="input-actions">
        <div className="input-icons">
          <Zap size={20} />
          <SaveAll size={20} />
          <Laugh size={20} />
        </div>

        <button className="send-button">
          Send 
          
        </button>
      </div>

    </div>
  );
}

export default MessageInput;
