import { useState } from "react";

const initialArticles = [
  "The 'Dark Forest' Theory",
  "Deep Space Signals",
  "First Contact Protocol",
];

export default function App() {
  const [articleList, setArticleList] = useState(initialArticles);
  const [newArticle, setNewArticle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newArticle !== "") {
      setArticleList([...articleList, newArticle]);
      setNewArticle("");
    }
  };

  const handleChange = (e) => setNewArticle(e.target.value);

  const handleDelete = (indexToDelete) =>
    setArticleList(articleList.filter((article, index) => index !== indexToDelete));

  return (
    <>
      <h1 className="text-center py-4 bg-secondary text-light">Conspiracy Blog</h1>
      <div className="container mt-5">
        <h2 className="h1 ps-2 mb-4">Blog Articles 🛸</h2>
        <div className="d-flex gap-5">
          <ul className="list-group fs-3 w-50">
            {articleList.map((article, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between">
                <span>{article}</span>
                <button onClick={() => handleDelete(index)} className="btn btn-outline-danger px-3">
                  <i className="bi bi-trash3"></i>
                </button>
              </li>
            ))}
          </ul>
          <div className="vr"></div>
          <form onSubmit={handleSubmit} className="fs-2">
            <label htmlFor="new-article" className="mb-1">
              New Article
            </label>
            <div className="input-group mb-3">
              <input
                value={newArticle}
                onChange={handleChange}
                type="text"
                placeholder="Article title.."
                className="form-control fs-4"
              />
              <button className="btn btn-primary fs-4" id="new-article">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
