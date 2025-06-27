import { Link } from "react-router-dom";

const Sidebar = ({ darkMode, setDarkMode }) => {
  return (
    <div className={`w-64 p-4 h-full ${darkMode ? 'bg-gray-800 text-white border-gray-700' : 'bg-gray-100 text-black border-gray-200'} border-r`}>
      
      <ul className="space-y-2">
       <li><button className="w-full text-left p-2 hover:bg-sky-600 rounded bg-sky-500 text-white"><Link to="/new-chat">+ New Chat</Link></button></li>
        <li className="flex items-center p-2 hover:bg-gray-700 rounded cursor-pointer">
          <span className="mr-2">🌙</span> Dark
          <div className="ml-auto">
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="sr-only peer" 
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </li>
        <li className="p-2 hover:bg-gray-700 rounded cursor-pointer">Manage Subscription</li>
        <li className="p-2 hover:bg-gray-700 rounded cursor-pointer">Users</li>
        <li className="p-2 hover:bg-gray-700 rounded cursor-pointer">Help And Support</li>
        <li className="p-2 hover:bg-gray-700 rounded cursor-pointer">FAQ</li>
      </ul>

      <div className="">
       <button className="btn btn-warning">LogOut</button>
      </div>
    </div>
  );
};

export default Sidebar;
