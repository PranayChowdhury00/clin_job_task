import React from "react";
import { Link } from "react-router-dom";

const Benefits = () => {
  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-bold text-sky-400 mb-8 text-center">
          Benefits
        </h1>

        {/* Description & List */}
        <div>
          <h2 className="text-lg md:text-xl font-medium mb-4 text-gray-200">
            Healthcare providers using Clin Technologies solutions report:
          </h2>

          <ul className="list-disc pl-6 space-y-3 text-gray-300 text-base md:text-lg">
            <li>Reduction in documentation time by 40–60%</li>
            <li>Improved work-life balance with less after-hours charting</li>
            <li>Enhanced patient interaction due to less focus on note-taking</li>
            <li>More comprehensive and consistent clinical documentation</li>
            <li>Reduced risk of documentation errors and omissions</li>
          </ul>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
            <Link to='login'><button className="btn btn-outline text-white border-white hover:bg-white hover:text-gray-900 transition duration-300">
              Login
            </button></Link>
            <Link to='register'>
          <button
            className="btn px-6 py-2 bg-cyan-500 text-white font-semibold rounded shadow-md transition-all duration-300 hover:shadow-cyan-400/50 hover:shadow-lg active:translate-y-[-2px]"
          >
            SignUp
          </button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
