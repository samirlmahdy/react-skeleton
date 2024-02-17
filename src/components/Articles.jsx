import React, { useEffect, useState } from "react";

const Articles = () => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      const fetchArticles = async () => {
        const result = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await result.json();
        setArticles(data);
      };
      fetchArticles();
    }, 5000);
  }, []);
  return (
    <div className="articles">
      <h2>Articles</h2>
      {articles &&
        articles.map((article) => {
          return (
            <div
              className="article"
              key={article.id}
            >
              <h3>{article.title}</h3>
              <p>{article.body}</p>
            </div>
          );
        })}
      {!articles && <div>Loading...</div>}
    </div>
  );
};

export default Articles;