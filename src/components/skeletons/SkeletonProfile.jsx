import React from "react";
import SkeletonElement from "./SkeletonElement";
import Shimmer from "./Shimmer";

const SkeletonProfile = ({ theme }) => {
  return (
    <div className={`skeleton-wrapper ${theme}`}>
      <Shimmer />
      <div className="skeleton-profile">
        <div>
          <SkeletonElement type="avatar" />
        </div>
        <div>
          <SkeletonElement type="title" />
          <SkeletonElement type="text" />
          <SkeletonElement type="text" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonProfile;
