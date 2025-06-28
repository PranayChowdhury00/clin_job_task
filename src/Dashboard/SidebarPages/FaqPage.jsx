import React, { useState } from 'react';

const FaqPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Is Clin Technologies HIPAA compliant?",
      answer: ""
    },
    {
      question: "Can I integrate Clin Technologies with my existing EMR system?",
      answer: "Absolutely. Our AI platform is built with seamless EMR integration in mind. Once set up, the AI-generated documentation is automatically formatted to match your system's requirements, streamlining your workflow and minimizing manual entry."
    },
    {
      question: "How does the AI personalize my documentation process?",
      answer: ""
    },
    {
      question: "What if the AI-generated documentation isn't accurate?",
      answer: ""
    },
    {
      question: "What solutions does Clin Technologies offer?",
      answer: ""
    },
    {
      question: "Who can use Clin Technologies?",
      answer: ""
    },
    {
      question: "Do you offer a free trial?",
      answer: ""
    },
    {
      question: "I have another question. How can I contact support?",
      answer: ""
    }
  ];

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">FAQ</h1>
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="border-b border-gray-200 pb-4"
          >
            <button
              onClick={() => toggleAnswer(index)}
              className="flex justify-between items-center w-full text-left focus:outline-none"
            >
              <h3 className="text-lg font-medium text-gray-800">
                {faq.question}
              </h3>
              <svg
                className={`w-5 h-5 text-gray-500 transform transition-transform ${activeIndex === index ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            
            {activeIndex === index && (
              <div className="mt-2 text-gray-600">
                {faq.answer || (
                  <p className="text-gray-500 italic">
                    Answer coming soon. Please contact support for more information.
                  </p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 bg-blue-50 p-6 rounded-lg">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">Still have questions?</h2>
        <p className="text-gray-600 mb-4">
          If you can't find the answer you're looking for, our support team is happy to help.
        </p>
        <a 
          href="support" 
          className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Contact Support
        </a>
      </div>
    </div>
  );
};

export default FaqPage;