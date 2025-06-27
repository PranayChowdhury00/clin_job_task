import React, { useState, useRef } from 'react';
import { useOutletContext } from 'react-router-dom';

const MainContent = () => {
  // Safely access context with default values
  const context = useOutletContext() || {};
  const { darkMode = false, setDarkMode = () => {} } = context;
  
  const [user, setUser] = useState({ name: 'Guest', avatar: '' });
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);
  const chatFileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      console.log("Selected file:", file.name);
    }
  };

  const handleFileButtonClick = () => {
    chatFileInputRef.current.click();
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUser({ ...user, avatar: event.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex-1 flex flex-col min-h-screen">
      {/* Header */}
      <div className={`p-4 border-b ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'}`}>
        <div className="flex items-center">
          <button 
            onClick={() => setShowProfileModal(true)}
            className="flex items-center"
          >
            {user.avatar ? (
              <img src={user.avatar} alt="Avatar" className="w-8 h-8 rounded-full mr-2" />
            ) : (
              <span className="mr-2">👤</span>
            )}
            <span className="font-semibold">{user.name}</span>
          </button>
          <span className="ml-2 text-gray-500">Welcome back</span>
        </div>
      </div>

      {/* App Buttons */}
      <div className={`flex flex-wrap gap-4 p-4 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
        {['Chatwright', 'TranscriptX', 'Redactify', 'Validity'].map((app) => (
          <button 
            key={app}
            className={`flex-1 min-w-[200px] p-4 rounded-lg text-left ${darkMode ? 'bg-gray-600 hover:bg-gray-500' : 'bg-white hover:bg-gray-50'} shadow`}
          >
            <span className="font-medium">{app}</span>
          </button>
        ))}
      </div>

      {/* Chat Area */}
      <div className={`flex-1 p-8 flex flex-col items-center justify-center ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
        <h1 className="text-4xl font-bold mb-2">Hello,</h1>
        <p className="text-xl mb-8">How Can I Help You Today</p>

        <div className="w-full max-w-2xl">
          <div className={`flex items-center p-2 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-white'} shadow`}>
            <button 
              onClick={handleFileButtonClick}
              className="p-2 text-gray-500 hover:text-blue-500 mr-2"
              title="Attach file"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
              </svg>
            </button>
            <input
              type="file"
              ref={chatFileInputRef}
              onChange={handleFileChange}
              className="hidden"
            />
            
            <input
              type="text"
              placeholder="Type your message (Shift + Enter for new line)"
              className={`flex-1 p-2 outline-none ${darkMode ? 'bg-gray-600 text-white placeholder-gray-300' : 'bg-white text-gray-900'}`}
            />
            
            <button className="p-2 text-blue-500 hover:text-blue-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
          
          {selectedFile && (
            <div className={`mt-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Selected file: {selectedFile.name}
              <button 
                onClick={() => setSelectedFile(null)}
                className="ml-2 text-red-500 hover:text-red-700"
              >
                ×
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Profile Modal */}
      {showProfileModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className={`p-6 rounded-lg w-96 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
            <div className="flex flex-col items-center mb-4">
              <label className="cursor-pointer">
                <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden mb-2">
                  {user.avatar ? (
                    <img src={user.avatar} alt="Avatar" className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-2xl">👤</span>
                  )}
                </div>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleAvatarChange}
                  ref={fileInputRef}
                />
              </label>
              <span className="text-sm text-blue-500">Click to change photo</span>
            </div>
            <div className="mb-4">
              <label className="block mb-2">Name</label>
              <input
                type="text"
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
                className={`w-full p-2 rounded border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
              />
            </div>
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setShowProfileModal(false)}
                className={`px-4 py-2 rounded ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
              >
                Cancel
              </button>
              <button
                onClick={() => setShowProfileModal(false)}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainContent;