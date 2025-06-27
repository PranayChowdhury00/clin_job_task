import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from './SIdebar';


const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`flex ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'} h-screen`}>
      <div className="w-[300px] py-5 h-full">
        <Sidebar darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
      <div className={`w-full h-full px-6 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
        {/* Pass darkMode and setDarkMode to Outlet */}
        <Outlet context={{ darkMode, setDarkMode }} />
      </div>
    </div>
  );
};

export default Dashboard;
