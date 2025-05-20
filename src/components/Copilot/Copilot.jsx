import "./Copilot.css";
import { Table2 } from 'lucide-react';

function Copilot() {
  return (
    <div className="copilot">
      <div className="copilot-header">
        <div className="copilot-tabs"> 
          <div className="ai-logo-text">
            <img className="intercom-img-1" src="/images/intercom_logo.png" alt="intercom logo"/>
            <button className="tab active">AI Copilot</button>
          </div>

          <button className="tab">Details</button>
        </div>
        <button className="expand-button"><Table2 size={20}/></button>
      </div>

      <div className="copilot-content">
        <div className="copilot-icon">
          <img className="intercom-img-2" src="/images/intercom_logo.png" alt="intercom logo"/>
        </div> 

        <h3 className="copilot-title">Hi, I'm Fin AI Copilot</h3> 

        <p className="copilot-description">
          Ask me anything about this conversation.
        </p>

        <div className="copilot-suggestion">
          <div className="suggestion-box">
            <span className="suggested-text">Suggested</span>
            <span className="emoji">💸</span>
            <span>How do I get a refund?</span>
          </div>
        </div>

        <div className="copilot-input">
          <input type="text" placeholder="Ask a question..." />
          <button className="copilot-send">↑</button>
        </div>
      </div>
    </div>
  );
}

export default Copilot;
