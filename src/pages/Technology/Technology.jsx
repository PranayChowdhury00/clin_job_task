import React from 'react';

const Technology = () => {
  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-sky-400">Our Technology</h1>
          <p className="text-white font-medium mt-4">
            At Clin Technologies, we've built our platform on groundbreaking AI technology specifically designed for healthcare. Our solutions use the latest advancements in natural language processing and machine learning to create a system that truly understands the complexities of medical documentation.
          </p>
        </div>

        {/* Grid layout for 3 sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* NLP Section */}
          <div className="bg-gray-700 p-6 rounded-lg flex flex-col items-start">
            <span className="h-5 w-5 bg-gray-400 rounded-full p-1 mb-3 flex items-center justify-center">🧠</span>
            <h2 className="text-xl font-semibold text-sky-300">
              Sophisticated Natural Language Processing
              <div className="w-auto h-[1px] bg-sky-400 mt-2"></div>
            </h2>
            <p className="text-gray-300 mt-3">
              At the core of our platform is an advanced foundation model. This enables our system to grasp the nuances of clinical conversations—understanding context, recognizing intent, and accurately interpreting medical terminology. This deep comprehension allows the AI to generate clear, concise, and contextually relevant medical notes automatically.
            </p>
          </div>

          {/* Personalization Section */}
          <div className="bg-gray-700 p-6 rounded-lg flex flex-col items-start">
            <span className="h-5 w-5 bg-gray-400 rounded-full p-1 mb-3 flex items-center justify-center">🔄</span>
            <h2 className="text-xl font-semibold text-sky-300">
              Learning Mode & Personalization
              <div className="w-auto h-[1px] bg-sky-400 mt-2"></div>
            </h2>
            <p className="text-gray-300 mt-3">
              Our AI doesn't rely on generic templates. We initiate the process by learning directly from your specific cases and workflows. The system intelligently refines its understanding and output based on your ongoing feedback. With each processed case, its accuracy and alignment with your unique clinical documentation needs become increasingly precise, ensuring a truly personalized solution.
            </p>
          </div>

          {/* Security Section */}
          <div className="bg-gray-700 p-6 rounded-lg flex flex-col items-start">
            <div className="flex flex-col space-y-2 mb-3">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-900 text-white text-sm">🔒 HIPAA Compliant</span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-900 text-white text-sm">📝 Business Associate Agreement</span>
            </div>
            <h2 className="text-xl font-semibold text-sky-300">
              Robust Data Privacy & Security
              <div className="w-auto h-[1px] bg-sky-400 mt-2"></div>
            </h2>
            <p className="text-gray-300 mt-3">
              Protecting sensitive health information is paramount. Our AI solutions are architected with a security-first approach, incorporating principles like 'zero trust'. We utilize robust security measures, including comprehensive encryption (both at rest and in transit) and strict, role-based access controls, to ensure data integrity and confidentiality, limiting access exclusively to authorized personnel.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
