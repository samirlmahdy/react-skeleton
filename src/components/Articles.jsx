import React, { useEffect, useState } from "react";
import "./skeletons/skeleton.css";
import SkeletonArticle from "./skeletons/SkeletonArticle";

const User = ({ theme }) => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      const fetchAricles = async () => {
        const result = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await result.json();
        setArticles(data);
      };
      fetchAricles();
    }, 5000);
  }, []);

  return (
    <div className="articles">
      <h2>Articles</h2>
      {articles ? (
        articles.map((article) => {
          return (
            <div className="article">
              <h3>{article.title}</h3>
              <p>{article.body}</p>
            </div>
          );
        })
      ) : (
        <>
          {[1, 2, 3, 4, 5].map((ar) => (
            <SkeletonArticle
              key={ar}
              theme={theme}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default User;
