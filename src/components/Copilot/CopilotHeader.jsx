import React from "react";
import { Table2 } from "lucide-react";

function CopilotHeader() {
  return (
    <div className="copilot-header">
      <div className="copilot-tabs">
        <div className="ai-logo-text">
          <img className="intercom-img-1" src="/images/intercom_logo.png" alt="intercom logo" />
          <button className="tab active">AI Copilot</button>
        </div>
        <button className="tab">Details</button>
      </div>
      
      <div className="buttons"> 

        <button type="button" className="copilot-menu">
        <img src="/images/Hamburger.svg" alt="menu-icon" className="menu-icon" />
      </button>

      <button className="expand-button">
        <Table2 size={20} />
      </button>
      </div>
      
    </div>
  );
}

export default CopilotHeader;
