"use client";
import { signOut } from "next-auth/react";
import React from "react";

function LogoutButton() {
  return (
    <button
      onClick={() => signOut()}
      className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
    >
      Sign Out
    </button>
  );
}

export default LogoutButton;
