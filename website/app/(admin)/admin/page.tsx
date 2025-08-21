// app/(admin)/page.tsx
"use client";

import { useState } from "react";

export default function AdminPage() {
  const [prs] = useState([
    { id: 1, title: "chore(site): initial Next.js skeleton", status: "merged" },
    { id: 2, title: "docs: add contributor guide draft", status: "open" },
  ]);

  return (
    <div className="space-y-10">
      {/* Header */}
      <header className="text-center">
        <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
        <p className="text-gray-600">
          Track PRs, issues, and project health across the J-Jparams org.
        </p>
      </header>

      {/* PR Tracking Table */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Pull Requests</h2>
        <table className="w-full border-collapse border border-gray-200 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2 text-left">ID</th>
              <th className="border px-4 py-2 text-left">Title</th>
              <th className="border px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {prs.map((pr) => (
              <tr key={pr.id}>
                <td className="border px-4 py-2">#{pr.id}</td>
                <td className="border px-4 py-2">{pr.title}</td>
                <td className="border px-4 py-2">
                  <span
                    className={`px-2 py-1 rounded text-white ${
                      pr.status === "merged"
                        ? "bg-green-600"
                        : pr.status === "open"
                        ? "bg-blue-600"
                        : "bg-gray-400"
                    }`}
                  >
                    {pr.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Placeholder for more admin features */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Upcoming Features</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>📊 Issue tracking with priority filters</li>
          <li>🧑‍🤝‍🧑 Contributor activity feed</li>
          <li>🚦 CI/CD health monitoring</li>
        </ul>
      </section>
    </div>
  );
}
