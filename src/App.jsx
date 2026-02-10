import { useState } from "react";

const articles = ["The 'Dark Forest' Theory", "Deep Space Signals", "First Contact Protocol"];

export default function App() {
  return (
    <div className="container mt-5">
      <h1 className="ps-2 mb-4">Blog Articles 🛸</h1>
      <div className="d-flex gap-5">
        <ul className="list-group fs-3 w-50">
          {articles.map((article, index) => (
            <li key={index} className="list-group-item">
              {article}
            </li>
          ))}
        </ul>
        <form className="fs-2">
          <label htmlFor="new-article">New Article</label>
          <div className="input-group mb-3">
            <input type="text" className="form-control fs-4" />
            <button className="btn btn-primary fs-4" id="new-article">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
