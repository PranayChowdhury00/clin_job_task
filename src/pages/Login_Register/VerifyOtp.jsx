import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const VerifyOtp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const emailFromRegister = location.state?.email || "";
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleOtpVerify = async () => {
    setError("");
    setMessage("");

    try {
      const res = await fetch("https://alibackend.duckdns.org/authentication_app/verify_otp/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          email: emailFromRegister,
          otp
        })
      });

      const data = await res.json();
      console.log(data);

      if (!res.ok) {
        setError(data.detail || "OTP verification failed.");
      } else {
        setMessage("✅ OTP verified. Redirecting...");
        setTimeout(() => {
          navigate("/dashboard"); // ✅ redirect to dashboard
        }, 1000);
      }
    } catch (err) {
      setError("Something went wrong!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-4">Verify OTP</h2>
        <p className="mb-2 text-gray-600">OTP sent to <strong>{emailFromRegister}</strong></p>

        <input
          type="text"
          placeholder="Enter OTP"
          className="w-full p-2 border rounded mb-4"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />

        {error && <p className="text-red-500 mb-2">{error}</p>}
        {message && <p className="text-green-500 mb-2">{message}</p>}

        <button
          onClick={handleOtpVerify}
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Verify OTP
        </button>
      </div>
    </div>
  );
};

export default VerifyOtp;
