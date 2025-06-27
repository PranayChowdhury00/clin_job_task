import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setError("");

    try {
      const response = await fetch("https://alibackend.duckdns.org/authentication_app/signin/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();
      console.log("Login Response:", data);

      if (!response.ok) {
        setError(data.detail || "Login failed. Please try again.");
      } else {
        // ✅ Optionally save token to localStorage or context
        localStorage.setItem("token", data.access || "");
        // ✅ Redirect to dashboard
        navigate("/dashboard");
      }
    } catch (err) {
      setError("Something went wrong!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="text-center">
        <img src="/infinity.png" alt="Logo" className="mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Hello, Welcome!</h1>
        <p className="text-gray-600 mb-6">Please Enter Your Details Below To Continue</p>
        <div className="bg-white p-6 rounded-lg shadow-md w-80">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Your Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>

          {error && <p className="text-red-500 mb-2">{error}</p>}

          <div className="flex items-center justify-between mb-4">
            <div>
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember" className="text-sm text-gray-700">Remember Me</label>
            </div>
            <a href="#" className="text-sm text-blue-600 hover:underline">Forgot Password?</a>
          </div>
          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            Login
          </button>
          <p className="text-sm text-blue-600 mt-4 text-center">
            <Link to="/register" className="hover:underline">Create account, sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
