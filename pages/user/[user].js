import React, { useEffect, useState } from "react";
import UserProfile from "../../components/profile/UserProfile";
import NotRegistered from "../../components/profile/NotRegistered";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("current-user"));
    if (storedUser && storedUser.name && storedUser.email) {
      setUser(storedUser);
    }
  }, []);
  
  return <div>{user ? <UserProfile user={user} /> : <NotRegistered />}</div>;
};

export default Profile;
