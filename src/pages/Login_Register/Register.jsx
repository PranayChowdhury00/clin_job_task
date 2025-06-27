import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate(); // for navigation
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = async () => {
    setError("");
    setSuccess("");

    if (password !== confirmPassword) {
      return setError("Passwords do not match!");
    }

    try {
      const response = await fetch("https://alibackend.duckdns.org/authentication_app/signup/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.detail || "Registration failed.");
      } else {
        setSuccess("Registration successful. Redirecting to OTP...");
        // Wait a moment before navigating
        setTimeout(() => {
          navigate("/verify", { state: { email } });
        }, 1000);
      }
    } catch (err) {
      setError("Something went wrong!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="text-center">
        <img src="/infinity.png" alt="Logo" className="mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Create account</h1>
        <p className="text-gray-600 mb-6">
          Enter your email and password to register.
        </p>
        <div className="bg-white p-6 rounded-lg shadow-md w-100 max-w-md mx-auto">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Your Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              New Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter New Password"
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm New Password"
              className="w-full p-2 border rounded"
            />
          </div>

          {error && <p className="text-red-500 mb-2">{error}</p>}
          {success && <p className="text-green-500 mb-2">{success}</p>}

          <button
            onClick={handleRegister}
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            Sign Up
          </button>

          <p className="text-sm text-blue-600 mt-4 text-center">
            <Link to="/login" className="hover:underline">
              Already Have An Account? Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
