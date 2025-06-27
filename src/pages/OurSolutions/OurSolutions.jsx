const OurSolutions = () => {
  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header text */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-sky-400 mb-8 text-center">Our Solutions</h1>
          <p className="text-white mt-5 mb-5 font-medium">Our comprehensive suite of AI-powered solutions transforms every aspect of healthcare documentation:</p>
        </div>

        {/* Grid layout for 4 sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Validify Section */}
          <div className="bg-gray-700 p-6 rounded-lg border-l-4 border-green-500">
            <div className="flex items-center mb-4">
              <span className="text-green-500 mr-2">✔</span>
              <h2 className="text-xl font-semibold">Validify</h2>
            </div>
            <p className="text-gray-300">
              Mitigate compliance risk with powerful AI that optimizes chart reviews for accuracy, integrity, coding, and compliance. Validify automatically identifies documentation gaps, ensures coding accuracy, and maintains regulatory compliance.
            </p>
          </div>

          {/* Redactify Section */}
          <div className="bg-gray-700 p-6 rounded-lg border-l-4 border-yellow-500">
            <div className="flex items-center mb-4">
              <span className="text-yellow-500 mr-2">○</span>
              <h2 className="text-xl font-semibold">Redactify</h2>
            </div>
            <p className="text-gray-300">
              Effortlessly redact HIPAA identifiers from text, documents, and structured data with Redactify – automating your compliance workflow. Protect sensitive patient information while maintaining clinical context.
            </p>
          </div>

          {/* TranscriptX Section */}
          <div className="bg-gray-700 p-6 rounded-lg border-l-4 border-purple-500">
            <div className="flex items-center mb-4">
              <span className="text-purple-500 mr-2">🎙️</span>
              <h2 className="text-xl font-semibold">TranscriptX</h2>
            </div>
            <p className="text-gray-300">
              Spend less time documenting. TranscriptX dictates highly accurate medical transcriptions of patient encounters into text, understanding complex medical terminology and clinical context for superior accuracy.
            </p>
          </div>

          {/* Chartwright Section */}
          <div className="bg-gray-700 p-6 rounded-lg border-l-4 border-pink-500">
            <div className="flex items-center mb-4">
              <span className="text-pink-500 mr-2">📄</span>
              <h2 className="text-xl font-semibold">Chartwright</h2>
            </div>
            <p className="text-gray-300">
              Your best friend with charting – turn any normal text into a high-quality chart, delivered exactly how healthcare professionals need it with extensive customization options to match your workflow and documentation standards.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurSolutions;