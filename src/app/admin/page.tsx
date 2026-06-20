"use client";

import { useState } from "react";

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [isAllowed, setIsAllowed] = useState(false);

  const ADMIN_PASSWORD = "omm@123";

  if (!isAllowed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#faf7f0] p-6">
        <div className="bg-white border rounded-2xl p-8 max-w-sm w-full">
          <h1 className="text-2xl font-bold mb-4">Admin Login</h1>

          <input
            type="password"
            placeholder="Enter admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border p-3 rounded-lg mb-4"
          />

          <button
            onClick={() => {
              if (password === ADMIN_PASSWORD) {
                setIsAllowed(true);
              } else {
                alert("Wrong password");
              }
            }}
            className="w-full bg-green-700 text-white p-3 rounded-lg font-bold"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#faf7f0] p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 border shadow">
        <h1 className="text-3xl font-bold text-[#0d2818] mb-3">
          Admin Dashboard
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
  <div className="bg-green-50 border rounded-xl p-5">
    <p className="text-sm text-gray-600">Total Orders</p>
    <h2 className="text-3xl font-bold text-green-800">Check Sheet</h2>
  </div>

  <div className="bg-green-50 border rounded-xl p-5">
    <p className="text-sm text-gray-600">Total Revenue</p>
    <h2 className="text-3xl font-bold text-green-800">₹ Check Sheet</h2>
  </div>

  <div className="bg-green-50 border rounded-xl p-5">
    <p className="text-sm text-gray-600">Today Orders</p>
    <h2 className="text-3xl font-bold text-green-800">Check Sheet</h2>
  </div>
</div>

        <p className="text-gray-600 mb-6">
          View all customer orders saved from your website.
        </p>

        <a
          href="https://docs.google.com/spreadsheets/d/1t5o9N0jRdwoTdpdg9Txo8HKHxYAwayYLAnz5xBW0uYM/edit?gid=0#gid=0"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-700 text-white px-6 py-3 rounded-xl font-bold"
        >
          Open Orders Sheet
        </a>
      </div>
    </div>
  );
}