const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black w-full h-[500px] flex items-center">
      <div className="max-w-5xl mx-auto px-6 text-center text-white space-y-6">
        <img src="/infinity.png" alt="logo" className="mx-auto w-16 h-16" />

        <h1 className="text-4xl font-bold">Clin Technologies</h1>

        <h2 className="text-lg md:text-xl font-medium">
          Revolutionizing clinical documentation through <span className="text-cyan-400 font-semibold">HIPAA COMPLIANT</span> advanced artificial intelligence, giving healthcare providers more time for what truly matters — patient care. <br />
          <span className="text-cyan-300 font-bold">Try it for FREE today.</span>
        </h2>

        <p className="text-sm md:text-base text-gray-300">
          Our sophisticated AI platform intelligently processes clinical conversations, creating accurate documentation that integrates with your existing EMR system.
        </p>

        <div className="flex justify-center gap-4 mt-6">
          <button className="btn btn-outline text-white border-white hover:bg-white hover:text-gray-900 transition-all duration-300">
            Login
          </button>
          <button
            className="btn px-6 py-2 bg-cyan-500 text-white font-semibold rounded shadow-md transition-all duration-300 hover:shadow-cyan-400/50 hover:shadow-lg active:translate-y-[-2px]"
          >
            SignUp
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
