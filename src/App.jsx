import "./App.css"
import Sidebar from "./components/Sidebar/Sidebar"
import Conversation from "./components/Conversation/Conversation"
import MessageInput from "./components/MessageInput/MessageInput"
import Copilot from "./components/Copilot/Copilot"

function App() {
  return (
    <div className="app">

      <div class="full-width-line"></div>

      <div className="main-content">

        <Sidebar />

        <div className="conversation-container">
          <Conversation />
          <MessageInput />
        </div>

        <Copilot />
      </div>
    </div>
  )
}

export default App
