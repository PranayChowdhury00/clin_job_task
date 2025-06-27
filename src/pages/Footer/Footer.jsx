import React from "react";

const Footer = () => {
  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold text-sky-400 mb-5">
          Get Started
        </h1>
        <p className="text-white font-medium mt-5 mb-5">
          Ready to transform your clinical documentation process? Contact our
          team to learn how Clin Technologies can be tailored to your specific
          healthcare setting.
        </p>

        <div className="max-w-[600px] mx-auto rounded-xl border-2 border-sky-300 p-10 text-center">
          <p className="text-gray-400 font-medium">
            Or reach us directly via email at{" "}
            <a
              href="mailto:support@clintechso.com"
              className="text-sky-300 hover:underline"
            >
              support@clintechso.com
            </a>
          </p>
        </div>

        <div className="flex justify-center gap-4 mt-6">
          <button className="btn btn-outline text-white border-white hover:bg-white hover:text-gray-900 transition-all duration-300">
            Login
          </button>
          <button className="btn px-6 py-2 bg-cyan-500 text-white font-semibold rounded shadow-md transition-all duration-300 hover:shadow-cyan-400/50 hover:shadow-lg active:translate-y-[-2px]">
            SignUp
          </button>
        </div>
      </div>

      <hr className="text-sky-200 mt-10 mb-10" />

      <div className="max-w-6xl mx-auto px-6 md:px-20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
        <div className="flex gap-5">
          <a href="#" className="hover:text-sky-300 transition duration-300">
            Terms of Use
          </a>
          <a href="#" className="hover:text-sky-300 transition duration-300">
            Privacy Policy
          </a>
        </div>
        <div>
          <p className="text-gray-500">
            &copy; 2025 Clin Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
