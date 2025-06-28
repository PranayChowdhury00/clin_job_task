// Sidebar.jsx
import { FaUserPlus } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = ({ darkMode, setDarkMode, resetChat }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleNewChat = () => {
    resetChat();
    navigate("/dashboard"); // Navigate to main chat view
  };

  return (
    <div
      className={`w-64 p-4 h-screen flex flex-col justify-between ${
        darkMode
          ? "bg-gray-800 text-white border-gray-700"
          : "bg-gray-100 text-black border-gray-200"
      } border-r`}
    >
      <div>
        <div className="mb-5">
          <Link className="flex gap-5 items-center text-xl font-bold" to="/">
            <img src="/infinity.png" alt="logo" /> Home
          </Link>
        </div>

        <ul className="space-y-2">
          <li>
            <button
              onClick={handleNewChat}
              className="block p-2 bg-sky-500 hover:bg-sky-600 text-white rounded text-left w-full"
            >
              + New Chat
            </button>
          </li>

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

          <li>
            <Link
              to="/dashboard/subscription"
              className="block w-full p-2 rounded hover:bg-gray-700"
            >
              Manage Subscription
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/users"
              className="w-full p-2 rounded hover:bg-gray-700 flex items-center gap-1"
            >
              <FaUserPlus /> Users
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/settings"
              className="block w-full p-2 rounded hover:bg-gray-700"
            >
              Settings
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/support"
              className="block w-full p-2 rounded hover:bg-gray-700"
            >
              Help And Support
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/faq"
              className="block w-full p-2 rounded hover:bg-gray-700"
            >
              FAQ
            </Link>
          </li>
        </ul>
      </div>

      <div className="mt-6">
        <button
          onClick={handleLogout}
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
