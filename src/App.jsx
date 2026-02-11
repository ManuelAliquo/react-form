import { useState } from "react";
import List from "./components/List";
import Form from "./components/Form";

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
          <List array={articleList} handleDelete={handleDelete} />
          <div className="vr"></div>
          <Form
            newItem={newArticle}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            label="New Article"
            placeholder="Article title..."
            btnAction="Add"
          />
        </div>
      </div>
    </>
  );
}
