import axios from "axios";
import { UserCard } from "./components/UserCard";
import "./styles.css";
import { UserProfile } from "./types/userProfile";
import { User } from "./types/api/user";
import { useState } from "react";
import { useAllUsers } from "./hooks/useAllUsers";
// const user: UserProfile = {
//   id: 1,
//   name: "name",
//   email: "aaa@aa",
//   address: "aaa"
// };

export default function App() {
  const { getUsers, userProfiles, loading, error } = useAllUsers();
  const onClickFetchData = () => getUsers();
  return (
    <div className="App">
      <button onClick={onClickFetchData}>データ取得</button>
      <br />
      {error ? (
        <p style={{ color: "red" }}>データの取得に失敗</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {console.log("userProfile")}
          {userProfiles.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </>
      )}
    </div>
  );
}
