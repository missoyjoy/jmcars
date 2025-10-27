import React, { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../firebase/firebase"; // relative path

import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      alert("Google login successful!");
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-[#D4AF37]">
      <h2 className="text-3xl font-bold mb-6">Login to Your Account</h2>
      <form onSubmit={handleLogin} className="flex flex-col gap-4 w-80">
        <input
          type="email"
          placeholder="Email"
          className="p-2 rounded bg-gray-800 text-white"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 rounded bg-gray-800 text-white"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="bg-[#D4AF37] text-black py-2 rounded font-semibold hover:bg-yellow-500"
        >
          Login
        </button>
      </form>
      <button
        onClick={handleGoogleLogin}
        className="mt-4 bg-red-600 py-2 px-4 rounded text-white font-semibold hover:bg-red-700"
      >
        Sign in with Google
      </button>
      <p className="mt-4">
        Don’t have an account?{" "}
        <Link to="/signup" className="text-yellow-400 underline">
          Sign up
        </Link>
      </p>
    </div>
  );
}
