import React, { useState } from "react";
import { login, loginWithGoogle } from "../auth";  // Make sure these functions are in the 'auth' file

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await login(email, password);  // Call login function
      alert("Login successful!");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();  // Handle Google login via Firebase
      alert("Login successful with Google!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-300 to-gray-400">
      <div className="bg-gradient-to-b from-white via-gray-100 to-gray-200 p-8 rounded-xl shadow-lg max-w-md w-full text-gray-800">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Login</h2>
        <div className="space-y-5">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-md bg-gray-200 border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent placeholder-gray-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-md bg-gray-200 border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent placeholder-gray-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={handleLogin}
            className="w-full py-3 bg-yellow-500 text-black font-semibold rounded-md hover:bg-yellow-400 transition-all duration-300 ease-in-out shadow-lg"
          >
            Login
          </button>
          <button
            onClick={handleGoogleLogin}
            className="w-full py-3 bg-gray-100 text-gray-800 font-semibold rounded-md flex items-center justify-center space-x-3 hover:bg-gray-200 transition-all duration-300 ease-in-out shadow-lg"
          >
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google Logo"
              className="w-6 h-6"
            />
            <span>Login with Google</span>
          </button>
        </div>
        <p className="text-gray-600 text-center mt-6 text-sm">
          Don't have an account?{" "}
          <a href="/signup" className="text-yellow-400 hover:underline">
            Sign Up here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
