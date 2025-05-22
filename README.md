# Chat App

A **real-time chat application** that enables users to send instant messages, create group chats, and stay connected with friends across devices. Built with modern technologies to deliver seamless communication.

---

## Table of Contents

- [About](#about)  
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Installation](#installation)  
- [Usage](#usage)  
- [API Endpoints](#api-endpoints)  
- [Folder Structure](#folder-structure)  
- [Screenshots](#screenshots)  
- [Contributing](#contributing)  
- [License](#license)  
- [Contact](#contact)  

---

## About

The Chat App is designed to provide a smooth and intuitive chatting experience with features like:

- Instant messaging  
- Group chat support  
- User authentication with secure login  
- Online presence indicators  
- Typing status  
- Responsive UI for both desktop and mobile  

---

## Features

- **Real-Time Messaging:** Messages are delivered instantly using WebSockets (Socket.IO).  
- **User Authentication:** Secure signup and login system with password encryption and JWT tokens.  
- **User Profiles:** Each user has a profile with an avatar, status, and display name.  
- **Group Chats:** Users can create or join multiple chat rooms for group conversations.  
- **Online Status:** Shows when users are online/offline.  
- **Typing Indicators:** See when someone is typing a message.  
- **Message History:** Persistent chat history stored in the database.  
- **Responsive Design:** Works smoothly on desktop and mobile devices.

---

## Tech Stack

| Layer         | Technology                 |
|---------------|----------------------------|
| Frontend      | React.js, Tailwind CSS     |
| Backend       | Node.js, Express.js        |
| Real-Time     | Socket.IO                  |
| Database      | MongoDB                    |
| Authentication| JWT (JSON Web Tokens)      |

---

## Installation

### Prerequisites

- Node.js (v14 or higher)  
- MongoDB (running locally or via Atlas)  

### Steps

```bash
# Clone the repository
git clone https://github.com/your-username/chat-app.git

# Navigate to the backend folder
cd chat-app/backend

# Install backend dependencies
npm install

# Start backend server
npm run server
