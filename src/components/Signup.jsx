import React, { useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "../Firebase";  // Ensure you're importing Firebase correctly
import { addDoc, collection } from "firebase/firestore";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreed, setAgreed] = useState(false);

  const handleSignup = async () => {
    if (!agreed) {
      alert("Please agree to the terms and conditions.");
      return;
    }

    try {
      // Firebase Authentication - Email and Password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Firestore - Add user details to collection
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name,
        email,
      });

      alert("Signup successful!");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleSignup = async () => {
    const provider = new GoogleAuthProvider();

    try {
      // Firebase Authentication - Google Sign-in
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Firestore - Add user details to collection
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        email: user.email,
      });

      alert("Signup successful with Google!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-300 to-gray-400">
      <div className="bg-gradient-to-b from-white via-gray-100 to-gray-200 p-8 rounded-xl shadow-lg max-w-md w-full text-gray-800">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Create Your Account</h2>
        <div className="space-y-5">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-3 rounded-md bg-gray-200 border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent placeholder-gray-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-md bg-gray-200 border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent placeholder-gray-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Create Password"
            className="w-full px-4 py-3 rounded-md bg-gray-200 border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent placeholder-gray-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              className="w-4 h-4 text-yellow-400 bg-gray-200 border border-gray-300 rounded focus:ring-yellow-400 focus:ring-2"
              checked={agreed}
              onChange={() => setAgreed(!agreed)}
            />
            <label className="text-gray-600 text-sm">
              I agree to the{" "}
              <a href="/terms" className="text-yellow-400 underline">Terms and Conditions</a>
            </label>
          </div>
          <button
            onClick={handleSignup}
            className="w-full py-3 bg-yellow-500 text-black font-semibold rounded-md hover:bg-yellow-400 transition-all duration-300 ease-in-out shadow-lg"
          >
            Sign Up
          </button>
          <button
            onClick={handleGoogleSignup}
            className="w-full py-3 bg-gray-100 text-gray-800 font-semibold rounded-md flex items-center justify-center space-x-3 hover:bg-gray-200 transition-all duration-300 ease-in-out shadow-lg"
          >
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google Logo"
              className="w-6 h-6"
            />
            <span>Sign Up with Google</span>
          </button>
        </div>
        <p className="text-gray-600 text-center mt-6 text-sm">
          Already have an account?{" "}
          <a href="/login" className="text-yellow-400 hover:underline">Login here</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
