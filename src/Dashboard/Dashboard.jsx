// Dashboard.jsx
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from './Sidebar';

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [chats, setChats] = useState([]);
  const [resetKey, setResetKey] = useState(0); // NEW

  const addChat = (newChat) => {
    setChats(prev => [newChat, ...prev]);
  };

  const resetChat = () => {
    setResetKey(prev => prev + 1); // triggers re-render
  };

  return (
    <div className={`flex ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'} h-screen`}>
      <div className="w-[300px] py-5 h-full">
        <Sidebar darkMode={darkMode} setDarkMode={setDarkMode} resetChat={resetChat} />
      </div>
      <div className={`w-full h-full px-6 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
        <Outlet context={{ darkMode, setDarkMode, chats, addChat }} key={resetKey} />
      </div>
    </div>
  );
};

export default Dashboard;
