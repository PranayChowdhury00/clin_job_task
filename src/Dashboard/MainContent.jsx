import React, { useState, useRef, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

const MainContent = () => {
  const context = useOutletContext() || {};
  const { darkMode = false } = context;

  const [user, setUser] = useState({ name: "Guest", avatar: "" });
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [chatId, setChatId] = useState(null);
  const fileInputRef = useRef(null);
  const chatFileInputRef = useRef(null);

  const token = localStorage.getItem("token");


  console.log("input",input)

  // 🟡 Fetch user profile on load
  useEffect(() => {
    const fetchUserProfile = async () => {
      if (!token) return;

      try {
        const response = await fetch(
          "https://alibackend.duckdns.org/authentication_app/user_profile/",
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
            },
          }
        );

        const data = await response.json();
        if (response.ok) {
          setUser(prev => ({
            ...prev,
            name: data?.name || "Guest"
          }));
        }
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    fetchUserProfile();
  }, [token]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setSelectedFile(file);
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

  const updateUserProfile = async () => {
    if (!token) {
      alert("Not authenticated");
      return;
    }

    try {
      const response = await fetch(
        "https://alibackend.duckdns.org/authentication_app/user_profile/",
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ name: user.name }),
        }
      );

      const result = await response.json();

      

      alert("Profile updated successfully");
    } catch (err) {
      console.error("Failed to update profile", err);
      alert("Error updating profile");
    }
  };

const sendMessage = async () => {
  if (!input.trim()) return;

  const token = localStorage.getItem("token");
  console.log('token',token)
  if (!token) {
    alert("Token not found. Please log in.");
    return;
  }

  const userMessage = { sender: 'user', text: input };
  setMessages((prev) => [...prev, userMessage]);

  try {
    const response = await fetch('https://alibackend.duckdns.org/chat/create_chat/',
      new Blob([input], { type: 'text/plain' }),
      {
      
      headers: {
        'Content-Type': 'text/plain',
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
      },
     
    });

    const data = await response.json();
 console.log("data",data)
    const aiMessage = {
      sender: 'ai',
      text: data?.message || 'Response received.',
    };
     console.log("ai message",aiMessage)
    setMessages((prev) => [...prev, aiMessage]);
  } catch (error) {
    console.error('Chat API error:', error);
    setMessages((prev) => [...prev, { sender: 'ai', text: 'Something went wrong.' }]);
  }

  setInput('');
};



  return (
    <div className="flex-1 flex flex-col min-h-screen">
      {/* Header */}
      <div className={`p-4 border-b ${darkMode ? "bg-gray-800 border-gray-700" : "bg-gray-50 border-gray-200"}`}>
        <div className="flex items-center">
          <button onClick={() => setShowProfileModal(true)} className="flex items-center">
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

      {/* Chat Display */}
      <div className={`flex-1 p-8 overflow-y-auto ${darkMode ? "bg-gray-700" : "bg-gray-100"}`}>
        <div className="max-w-2xl mx-auto space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg max-w-[90%] ${
                msg.sender === "user"
                  ? "bg-blue-500 text-white ml-auto"
                  : "bg-gray-300 text-black"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="w-full max-w-2xl mx-auto p-4">
        <div className={`flex items-center p-2 rounded-lg ${darkMode ? "bg-gray-600" : "bg-white"} shadow`}>
          <button onClick={handleFileButtonClick} className="p-2 text-gray-500 hover:text-blue-500 mr-2">📎</button>
          <input type="file" ref={chatFileInputRef} onChange={handleFileChange} className="hidden" />
          <input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
              }
            }}
            className={`flex-1 p-2 outline-none ${
              darkMode ? "bg-gray-600 text-white placeholder-gray-300" : "bg-white text-gray-900"
            }`}
          />
          <button onClick={sendMessage} className="p-2 text-blue-500 hover:text-blue-700">➤</button>
        </div>
        {selectedFile && (
          <div className={`mt-2 text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
            Selected file: {selectedFile.name}
            <button onClick={() => setSelectedFile(null)} className="ml-2 text-red-500 hover:text-red-700">×</button>
          </div>
        )}
      </div>

      {/* Profile Modal */}
      {showProfileModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className={`p-6 rounded-lg w-96 ${darkMode ? "bg-gray-800" : "bg-white"}`}>
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
                className={`w-full p-2 rounded border ${darkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300"}`}
              />
            </div>
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setShowProfileModal(false)}
                className={`px-4 py-2 rounded ${darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-200 hover:bg-gray-300"}`}
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  updateUserProfile();
                  setShowProfileModal(false);
                }}
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
