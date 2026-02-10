import { useState } from "react";

const articles = ["The 'Dark Forest' Theory", "Deep Space Signals", "First Contact Protocol"];

export default function App() {
  return (
    <div className="container mt-5">
      <h1 className="ps-2 mb-4">Blog Articles 🛸</h1>
      <ul className="list-group fs-3 w-50">
        {articles.map((article, index) => (
          <li key={index} className="list-group-item">
            {article}
          </li>
        ))}
      </ul>
    </div>
  );
}
