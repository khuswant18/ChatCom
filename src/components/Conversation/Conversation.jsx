import "./Conversation.css"
import Message from "../Message/Message"
import { MoonStar } from 'lucide-react';
import { PanelBottomClose } from 'lucide-react';

function Conversation() {
  const messages = [
    {
      id: 1,
      avatar: "L",
      content:
        "I bought a product from your store in November as a Christmas gift for a member of my family. However, it turns out they have something very similar already. I was hoping you'd be able to refund me, as it is un-opened.",
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
  ]

  return (
    
    <div className="conversation">

      <div className="header-center">
        <h2 className="con-heading">Luis Easton</h2>

        <div className="con-buttons">
          <button className="more-button">•••</button>
          <button className="theme-button"><MoonStar/></button>
          <button className="close-button">
            <div className="close-icon"><PanelBottomClose size={18}/></div>
            <div className="close-text">Close</div>
          </button>
        </div>
      </div> 

      
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
  )
}

export default Conversation
