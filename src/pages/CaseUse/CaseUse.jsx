const CaseUse = () => {
  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-sky-400 mb-8 text-center">Case Use</h1>
        <p className="mt-5 mb-5 text-white font-medium">
          See how healthcare providers across specialties are transforming their practice with Clin Technologies:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-900 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-sky-400 mb-2">Primary Care</h2>
            <p>
              Dr SJ M.D reduced her documentation time by 52%, allowing her to see 3 more patients daily while finishing her charts before leaving the office.
            </p>
            <p className="mt-2 italic text-gray-300">
              "This AI tool streamlines a tedious process, reduces 'click fatigue,' and helps me reclaim some sanity."
              <br />— Dr. SJ, M.D
            </p>
          </div>
          <div className="bg-blue-900 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-sky-400 mb-2">Emergency Medicine</h2>
            <p>
              Our ED department implemented Clin Tech, resulting in more thorough documentation and a 70% decrease in chart completion time during high-volume periods. Our nurses love it.
            </p>
            <p className="mt-2 italic text-gray-300">
              — Emergency Department (ED) Nurse Manager
            </p>
          </div>
          <div className="bg-blue-900 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-sky-400 mb-2">Behavioral Health</h2>
            <p>
              "Chartwright has been transformative for our clinic. Our therapists were drowning in documentation; we've slashed average charting time to under 3 minutes per patient, freeing up hours for direct care. More importantly, we've seen a significant reduction in documentation errors and compliance flags. It's not just faster; it's smarter documentation."
            </p>
            <p className="mt-2 italic text-gray-300">
              — Clinical Director, Behavioral Health Practice
            </p>
          </div>
          <div className="bg-blue-900 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-sky-400 mb-2">Case Management</h2>
            <p>
              "Honestly, with the number of patients I manage, documentation felt like a constant, losing battle. But this AI feels like getting an assistant. It takes my detailed notes and instantly creates the clear, customized charts I need. I'm getting hours back each week—hours I can now spend directly with patients, tackling barriers, not just typing."
            </p>
            <p className="mt-2 italic text-gray-300">
              — Social Worker/Case Manager
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseUse;


