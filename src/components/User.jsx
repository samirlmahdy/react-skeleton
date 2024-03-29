import React, { useEffect, useState } from "react";
import SkeletonProfile from "./skeletons/SkeletonProfile";

const User = ({ theme }) => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      const fetchUser = async () => {
        const result = await fetch(
          "https://jsonplaceholder.typicode.com/users/1"
        );
        const data = await result.json();
        setProfile(data);
      };
      fetchUser();
    }, 5000);
  }, []);

  return (
    <div className="user">
      <h2>User Details</h2>

      {profile ? (
        <div className="profile">
          <h3>{profile.username}</h3>
          <p>{profile.email}</p>
          <a href={profile.website}>{profile.website}</a>
        </div>
      ) : (
        <SkeletonProfile theme={theme} />
      )}
    </div>
  );
};

export default User;
