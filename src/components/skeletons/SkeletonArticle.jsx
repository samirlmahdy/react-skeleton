import React from "react";
import SkeletonElement from "./SkeletonElement";
import "./skeleton.css";
import Shimmer from "./Shimmer";

const SkeletonArticle = ({ theme }) => {
  return (
    <div className={`skeleton-wrapper ${theme}`}>
      <Shimmer />
      <div className="skeleton-article">
        <SkeletonElement type="title" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
      </div>
    </div>
  );
};

export default SkeletonArticle;
