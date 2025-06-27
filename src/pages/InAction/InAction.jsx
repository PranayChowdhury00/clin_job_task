import React, { useState } from 'react';

const tabs = ["TranscriptX", "Chartwright", "Redactify", "Validify"];

const InAction = () => {
  const [activeTab, setActiveTab] = useState("TranscriptX");
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  return (
    <div className='bg-gradient-to-b from-gray-800 to-gray-900 text-white py-12 min-h-screen'>
      <div className="max-w-6xl mx-auto px-4">
        <h1 className='text-4xl font-bold text-sky-400 text-center mb-6'>
          See Our Solutions in Action
        </h1>

        {/* Tabs */}
        <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-t-lg font-medium transition duration-300 
                ${activeTab === tab ? 'bg-gray-700 border-b-2 border-sky-400 text-white' : 'hover:bg-gray-700 text-gray-300'}`}
              >
                {tab}
              </button>
            ))}
          </div>

          <button
            onClick={toggleCollapse}
            className="text-sm text-gray-400 hover:text-white"
          >
            {isCollapsed ? 'Click to expand comparison' : 'Click to collapse comparison'}
          </button>
        </div>

        {/* Tab Content */}
        {!isCollapsed && (
          <div className="bg-gray-800 rounded-lg p-6">
            {activeTab === "TranscriptX" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-sky-300">DocDoSoR&*'s Dictation (Audio Input Simulation)</h3>
                  <div className="bg-gray-900 p-4 rounded-lg text-gray-300 text-sm max-h-[300px] overflow-y-auto">
                    <p>Okay, uh, patient is Sarah Chen, DOB 3/22/1978... (text trimmed)</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-sky-300">TranscriptX - AI-Generated Note</h3>
                  <div className="bg-gray-900 p-4 rounded-lg text-gray-300 text-sm max-h-[300px] overflow-y-auto">
                    <p><strong>Patient:</strong> Sarah Chen<br />
                      <strong>DOB:</strong> 03/22/1978<br />
                      <strong>Date of Service:</strong> October 26, 2023</p>
                    <p><strong>Chief Complaint:</strong><br />
                      Right knee pain x 3 months.</p>
                    <p><strong>Subjective:</strong><br />
                      Patient reports... (text trimmed)</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "Chartwright" && (
              <div className="text-center text-gray-300">Chartwright content would go here</div>
            )}

            {activeTab === "Redactify" && (
              <div className="text-center text-gray-300">Redactify content would go here</div>
            )}

            {activeTab === "Validify" && (
              <div className="text-center text-gray-300">Validify content would go here</div>
            )}

            {activeTab === "TranscriptX" && (
              <div className="flex justify-between mt-6">
                <button className="text-gray-400 hover:text-white flex items-center">
                  <span className="mr-2">←</span> Previous Example
                </button>
                <button className="text-gray-400 hover:text-white flex items-center">
                  Next Example <span className="ml-2">→</span>
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default InAction;
