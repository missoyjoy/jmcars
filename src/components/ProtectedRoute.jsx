import React from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../firebase/firebase";

export default function ProtectedRoute({ children }) {
  const user = auth.currentUser;

  if (!user) {
    // If user is not logged in, redirect to login
    return <Navigate to="/login" />;
  }

  // If logged in, allow access
  return children;
}
